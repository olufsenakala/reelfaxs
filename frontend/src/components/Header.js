import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <Link to="" className="logo__link">
            <img className="logo__image" src="/images/logo.png" alt="Reelfaxs" />
          </Link>
        </div>
        <div className="header__search">
          <form className="header__form" action="index.html" method="post">
            <button className="header__form__btn" type="button">
              <img className="image" src="/images/search.png" alt="" />
            </button>
            <input className="header__form__srch" type="text" placeholder="Search" />
          </form>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header;