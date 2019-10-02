import React, { Component } from 'react';
import propTypes from 'prop-types';
import validator from 'validator';
import { toast } from "react-toastify";
import  { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Auth from '../../stores/actions/auth';


export class Register extends Component {

  state = {
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    password: '',
    pw2: ''
  }


  handleChange(e) {
  e.preventDefault();
  const {name, value} = e.target
  this.setState({[name]: value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const { firstname, lastname, email, password, pw2 } = this.state
    if(firstname === '' || lastname === '' || email === '' || password === ''){
       toast.error('Fill in missing fields')
    } else if(password !== pw2){
      console.log(pw2);
      
      toast.error('Password does not match')
    } else if (!validator.isEmail(email)) {
      toast.error('Email is invalid')
    }
    else {
      this.props.AuthRegister( 'signup', this.state, this.props.history)
    }
  }

  componentWillMount(prevProps, prevState) {
    if (this.props.authenticated) {
      this.props.history.push('/dashboard')
    }
  }
  render(){
    
    return (
      <form action="dashboard.html" className="login-form" method="POST" onSubmit={e => this.handleSubmit(e)} noValidate>
        <div className="login_container">
          <hr />
    
          <input
            type="text"
            placeholder="Firstname"
            name="firstname"
            id="firstname"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            placeholder="lastname"
            name="lastname"
            id="lastname"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="tel"
            placeholder="Phone"
            name="number"
            id="number"
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="password"
            onChange={(e) => this.handleChange(e)}
          />
          <div className="feedback_container2" />
          <input
            type="password"
            placeholder="Comfirm password"
            name="pw2"
            id="password2"
            onChange={(e) => this.handleChange(e)}
          />
    
          <hr />
    
          <button type="submit" className="registerbtn" id={this.props.loading ? "sign-in-btn" : ''} disabled = { this.props.loading } >
          <div className="tit" >{this.props.loading ? 'Loading...' : 'sign up'}</div>
           {this.props.loading ? <i className="fas fa-spinner btnspinner" id="spinbtn2"> </i> : ''} 
          </button>
        </div>
      </form>
    );
  }
  }
  Register.propTypes = {
    AuthRegister: propTypes.func.isRequired,
    history: propTypes.shape({ push:propTypes.func }),
  };
  const mapDispatchToProps = {
    AuthRegister: Auth,
   }
   
   const mapStateToProps = state => ({
     user: state.auth.user,
     error: state.auth.error,
     loading: state.auth.isLoading,
     authenticated: state.auth.isAuthenticated,
   });

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));
