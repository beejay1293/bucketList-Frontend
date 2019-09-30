import React, { Component } from 'react'
import Proptype from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Input from './input';
import loginAction from '../../actions/login';

export class LoginForm extends Component {
  state = {
    email: '',
    password:'' 
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const obj = { email, password };
    this.props.loginAction(obj);
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.login !== '') {
      this.props.history.push('/dashbord')
    }
  }
  
  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.onSubmit} className="login-form" >
        <div className="login_container">
          <div className="feedback-message-login" />
          <hr />
          <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={email}
            onChange={this.onChange} 
          />
          <Input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            value={password}
            onChange={this.onChange}
          />

          <hr />
          <button type="submit" className="loginbtn" id="sign-in-btn">
            <div className="tit">Login</div>
            <i className="fas fa-spinner btnspinner" id="spinbtn"> </i>
          </button>
          <em className="forgot__password"><Link to='#'>Forgot Password? </Link></em>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  loginAction: Proptype.func.isRequired,
  login: Proptype.string.isRequired,
  loginERROR: Proptype.string.isRequired,
  history: Proptype.object.isRequired,
};

const mapStateToProps = state => ({
  login: state.login.token,
  loginERROR: state.login.error,
});

export default connect(
  mapStateToProps,
  { loginAction },
)(withRouter(LoginForm));
