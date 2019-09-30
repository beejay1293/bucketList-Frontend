import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Forms from './forms';

class Form extends PureComponent {
  render() {
    return (
      <React.Fragment>
      <div className="container">
        <div className="login__wrapper">
          <h1 className="header">
            <Link className="link" to="/">
              <span>
                <em>My</em>
              </span>
            Bucket
              <b className="mails">List</b>
            </Link>
          </h1>
          <Forms />
        </div>
        <div className="wrapper" />
      </div>
      </React.Fragment>
    );
  }
}
export default Form;
