import React from 'react';

const Header = ({name, logout}) => (
  <header className="header__container">
    <div className="logo">
      <h1 className="header">
        <div className="epic__mail">

          <span>
            <em>MY</em>
          </span
            >
BUCKET
          <b className="mail">LIST</b>

        </div>
      </h1>
    </div>
    <div className="navbar">
      <ul className="dropdown">
        <i className="far fa-user">

          <h5 className="user">
{name}
            <i className="fas fa-caret-down" />
          </h5>
          <div className="dropdown-content">

            <a href="/" className="reset__password" onClick={logout}>logout</a>
          </div>

        </i>

      </ul>
    </div>

  </header>
);

export default Header;
