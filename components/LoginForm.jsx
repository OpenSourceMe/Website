import React from 'react';

export const LoginForm = React.createClass({
  getInitialState() {
    return {
      username: "",
      password: "",
      loading: false
    }
  },
  login() {
    this.props.actions.resetStatus()
    this.props.actions.resetError()
    this.props.actions.login(this.state.username,this.state.password)
  },
  handleUChange(e) {
    this.setState({username: e.target.value})
  },
  handlePChange(e) {
    this.setState({password: e.target.value})
  },
  onEnter(e) {
    if(e.keyCode == 13){
      this.login() //13 is enter
      this.setState({loading: true})
    }
  },
  render() {
    return (
        <div style={{margin: '0 auto', width: '250px' }}>
          <input onChange={this.handleUChange} onKeyDown={this.onEnter} type='text' placeholder='Username' />
          <input onChange={this.handlePChange} onKeyDown={this.onEnter} type='password' placeholder="Password"/>
          <hr/>
            {this.props.error? <div className="alert alert-danger"> Login failed. 
            <br/>
            <b>Error:&nbsp;&nbsp;</b><i>{this.props.error}</i> </div> : <div></div>}
          <div>
        	<button onClick={this.login} className="btn btn-primary">Log In</button>
          </div>
          {this.state.loading && !this.props.error?
          <div>
            <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
            </div>
           </div>
           :
           <div></div>
          }
      </div>
    );
  }
})

