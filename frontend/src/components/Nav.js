import React, { useState } from 'react';
import { ReactComponent as BellIcon } from '../icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../icons/caret.svg';
import { ReactComponent as PlusIcon } from '../icons/plus.svg';
import { ReactComponent as CogIcon } from '../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../icons/chevron.svg';
// import { ReactComponent as ArrowIcon } from '../icons/arrow.svg';
// import { ReactComponent as BoltIcon } from '../icons/bolt.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>

    </Navbar>
  )
}

function DropdownMenu() {

  function DropdownItem(props) {
    return (
      
      // <a href="#" className="rf_menu-item">
      <Link to="#">
        <span className="rf_icon-button">{props.leftIcon}</span>

        {props.children}
        
        <span className="rf_icon-right">{props.rightIcon}</span>
      </Link>
      // </a>
    );
  }

  return (
    <div className="rf_dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
        leftIcon={<CogIcon />}
        rightIcon={<ChevronIcon />}
      >
        Settings
      </DropdownItem>
    </div>
  )
}

function Navbar(props) {
  return (
    <nav className="rf_navbar">
      <ul className="rf_navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <li className="rf_nav-item">
      {/* <a 
        href="#" 
        className="rf_icon-button"
        onClick={() => setOpen(!open)}
      > */}
        {props.icon}
      {/* </a> */}

      {open && props.children}
    </li>
  );
}

export default Nav;