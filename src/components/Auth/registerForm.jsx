import React from 'react';
import Input from './input';

const Register = () => (
  <form action="dashboard.html" className="login-form" method="POST">
    <div className="login_container">
      <hr />

      <Input
        type="text"
        placeholder="Firstname"
        name="name"
        id="firstname"
      />
      <Input
        type="text"
        placeholder="lastname"
        name="lastname"
        id="lastname"
      />
      <Input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
      />
      <Input
        type="tel"
        placeholder="Phone"
        name="tel"
        id="number"
      />
      <Input
        type="password"
        placeholder="Enter Password"
        name="psw"
        id="password"
      />
      <div className="feedback_container2" />
      <Input
        type="password"
        placeholder="Comfirm password"
        name="psw2"
        id="password2"
      />

      <hr />

      <button type="submit" className="registerbtn" id="signup">
        <div className="signuptit">Sign up</div>
        <i className="fas fa-spinner btnspinner" id="spinbtn2"> </i>
      </button>
    </div>
  </form>
);

export default Register;
