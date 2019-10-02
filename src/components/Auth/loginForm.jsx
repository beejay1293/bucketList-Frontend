import React, { Component } from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Input from './input';
import loginAction from '../../stores/actions/auth';

export class LoginForm extends Component {
  state = {
    email: '',
    password:'' 
  }

  handleInput(e){
    const {name, value } = e.target;
    this.setState({[name]: value});
  } 


  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const userDetails = { email, password };
    this.props.login( 'login', userDetails, this.props.history);
  };

  componentWillMount(prevProps, prevState) {
    if (this.props.authenticated) {
      this.props.history.push('/dashboard')
    }
  }
  
  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="login-form" >
        <div className="login_container">
          <div className="feedback-message-login">
          </div>
          <hr />
          <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={email}
            onChange={e => this.handleInput(e)} 
          />
          <Input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            value={password}
            onChange={e => this.handleInput(e)}
          />

          <hr />
          <button type="submit" className="loginbtn" id="sign-in-btn" onClick={e => this.handleSubmit(e)} disabled = {this.props.loading}>
          <div className="tit" >{this.props.loading ? 'Loading...' : 'Login'}</div>
            {this.props.loading ? <i className="fas fa-spinner btnspinner" id="spinbtn"> </i> : ''}
            <i className="fas fa-spinner btnspinner" id="spinbtn"> </i>
          </button> 
          <em className="forgot__password"><Link to='#'>Forgot Password? </Link></em>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  login: propTypes.func.isRequired,
  history: propTypes.shape({ push:propTypes.func }),
};

const mapDispatchToProps = {
 login: loginAction,
}

const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.auth.error,
  loading: state.auth.isLoading,
  authenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(LoginForm));
