import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isLoggedIn = JSON.parse(window.localStorage.getItem('logged_in'));

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const keyInput = (e) => {
    if (e.code === 'Enter') {
      toggleMenu();
    }
  };

  return (
    <header>
      <i
        className={!showMenu ? 'menuButton fa-solid fa-bars ' : 'menuButton fa-solid fa-xmark'}
        onClick={toggleMenu}
        onKeyDown={keyInput}
        tabIndex="0"
        aria-label="burger menu button"
        role="button"
      />

      <nav className={!showMenu ? 'display-none' : ''}>
        <NavLink to="/" className="logo" onClick={hideMenu}>QuickMaths</NavLink>

        {isLoggedIn ? (
          <ul className="menuLinks">
            <li>
              <NavLink to="/" onClick={hideMenu}>Tutors</NavLink>
            </li>
            <li>
              <NavLink to="/reserve" onClick={hideMenu}>Reserve</NavLink>
            </li>
            <li>
              <NavLink to="/reservations" onClick={hideMenu}>My reservations</NavLink>
            </li>
            <li>
              <NavLink to="/add_tutor" onClick={hideMenu}>Add tutor</NavLink>
            </li>
            <li>
              <NavLink to="/delete_tutor" onClick={hideMenu}>Delete tutor</NavLink>
            </li>
          </ul>
        ) : (<NavLink className="logInButton" to="/user/login" onClick={hideMenu}>Log in</NavLink>)}

        <ul className="socialLinks">
          <li>
            <a href="https://facebook.com" onClick={hideMenu} target="_blank" rel="noreferrer" aria-label="facebook page"><i className="fa-brands fa-facebook-f" /></a>
          </li>
          <li>
            <a href="https://twitter.com" onClick={hideMenu} target="_blank" rel="noreferrer" aria-label="twitter page"><i className="fa-brands fa-twitter" /></a>
          </li>
          <li>
            <a href="https://instagram.com" onClick={hideMenu} target="_blank" rel="noreferrer" aria-label="instagram page"><i className="fa-brands fa-instagram" /></a>
          </li>
        </ul>
        <div className="navRights">All rights reserved</div>
      </nav>
    </header>
  );
};

export default Nav;
