require("../node_modules/bootstrap/dist/css/bootstrap.min.css")
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Map} from 'immutable';

/* ROUTER */
import { Router, Route, browserHistory } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { syncHistoryWithStore } from 'react-router-redux';

/* REDUX */
import {Provider} from 'react-redux';
import {configureStore} from './redux/store';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as serverActions from './redux/reducers/server';

//components
import NavWrapper from './components/NavWrapper';
import Title from './components/Title';

/* create container as stateless function to indicate pure component */
export class App extends Component {
  render() {
    return (
      <div>
          <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <LinkContainer to="/home">
                  <a href='#'>Home</a>
                </LinkContainer>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav bsStyle="tabs">
                <LinkContainer to="/about">
                  <NavItem href="#">About</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>
        <div>
          {this.props.children}
        </div>
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

const store = configureStore();
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
  <Provider store={store}>
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path='/' component={AppContainer}>
        <Route path='/about' component={Title} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector("#app")
);
