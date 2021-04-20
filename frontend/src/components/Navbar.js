import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__items">
        <li className="nav__links">
          <Link 
            to="/login"
            className="nav__link nav__button nav__link-active" 
          >
            Sign In
          </Link>
        </li>
        <li className="nav__links">
          <Link 
            to="/cart"
            className="nav__link nav__button" 
          >
            Cart
          </Link>
        </li>
        {/* <li className="nav__links">
          <a className="nav__link" href="#">
            <img className="nav__link__fav" src="images/heart.png" alt="" />
          </a>
        </li>
        <li className="nav__links">
          <a className="nav__link" href="#">
            <img className="nav__link__cart" src="images/login_full.png" alt="" />
          </a>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar;