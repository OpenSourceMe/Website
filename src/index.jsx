require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Map} from 'immutable';

/* REDUX */
import {Provider} from 'react-redux';
import {configureStore} from './redux/store';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as serverActions from './redux/reducers/server';

//components
import { LoginForm } from './components/LoginForm';
import Title from './components/Title';

/* create container as stateless function to indicate pure component */
export class App extends Component {

  resetError = () => {
    this.props.actions.resetStatus(); this.props.actions.resetError()
  };

  render() {
    return (
      <div className='container'>
        <Title {...this.props.title}/>
          {!this.props.server.loggedIn
          ? <div>
            <LoginForm actions={this.props.actions} error={this.props.server.serverError} />
          </div>
          : <div>
              {this.props.server.serverError? <div className="alert alert-danger">
              <a className="close" onClick={this.resetError} ariaLabel="close">&times;</a>
              <span className="glyphicon glyphicon-exclamation-sign"></span>
              &nbsp;Something went wrong, sorry. Check your internet connection. <span style={{fontWeight: "bold"}}>
              &nbsp;&nbsp;&nbsp;&nbsp;
              Error:&nbsp;&nbsp;</span> <i>{this.props.server.serverError.message}</i> </div>: <div></div>}

              <NumbList actions={this.props.actions} numbs={this.props.numbs} />
            </div>
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
      ...state,
  };
}

function mapDispatchToProps(dispatch) {
  const actions = [serverActions];
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch,
  };
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppContainer/>
  </Provider>,
  document.querySelector("#app")
);
