import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', changeWidth);
  }, []);

  return (
    <header>
      <i className={!showMenu && screenWidth > 768 ? 'navAngle fa-solid fa-angles-right' : 'display-none'} onClick={toggleMenu} onKeyDown={keyInput} tabIndex="0" aria-label="close-menu" role="button" />
      <i className={!showMenu && screenWidth < 768 ? 'menuButton fa-solid fa-bars ' : 'display-none'} onClick={toggleMenu} onKeyDown={keyInput} tabIndex="0" aria-label="close-menu" role="button" />

      <nav className={showMenu ? 'showMenu' : 'display-none'}>
        <NavLink to="/" className="logo" onClick={hideMenu} tabIndex="0">QuickMaths</NavLink>
        <ul className="menuLinks">
          <li>
            <NavLink to="/login" onClick={hideMenu}>Tutors</NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={hideMenu}>Reserve</NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={hideMenu}>My reservations</NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={hideMenu}>Add tutor</NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={hideMenu}>Delete tutor</NavLink>
          </li>
        </ul>
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
        <div className="navRights">All right reserved</div>
      </nav>

      <i className={showMenu && screenWidth < 768 ? 'menuButton fa-solid fa-xmark' : 'display-none'} onClick={toggleMenu} onKeyDown={keyInput} tabIndex="0" aria-label="close-menu" role="button" />
      <i className={showMenu && screenWidth > 768 ? 'navAngleGapLeft navAngle fa-solid fa-angles-left' : 'display-none'} onClick={toggleMenu} onKeyDown={keyInput} tabIndex="0" aria-label="close-menu" role="button" />
    </header>
  );
};

export default Nav;
