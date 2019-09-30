import React from 'react';
import { Link } from 'react-router-dom';
import Email from '../../assets/images/buck.png';

const Header = () => (
  <header className="header__container_index">
    <div className="logo">
      <h1 className="header">
        <div className="epic__mails">
          <span>
            {' '}
            <i className="fas fa-envelope" />
            <em>My</em>
          </span>
          Bucket
          <b className="mail">List</b>
        </div>
      </h1>
    </div>
    <div>
      <div className="get_started">
        <h5 className="user">
          <a href="/login">GET STARTED</a>
        </h5>
      </div>
    </div>

    <section className="main_landing">
      <div className="pic">
        <h1>
          <img src={Email} width="120px" height="120px;" alt="" />
        </h1>
        <h1>
          WELCOME TO
          {' '}
          <span className="epic">MyBucket List</span>
        </h1>
        <p className="note">
        Bucket list is the app that allows you to draw out your dreams and aspirations for travel or accomplishment. When you check off an item on your list, you have the opportunity to add photos, journal entries and share the experience with friends and family. 
        </p>
        <p className="note">
          {' '}
          <Link to="/login">Login</Link>
          {' '}
        </p>
      </div>
    </section>
  </header>
);

export default Header;
