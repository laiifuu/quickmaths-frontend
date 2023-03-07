import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../redux/user/session-redux';

const Nav = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const isLoggedIn = JSON.parse(window.localStorage.getItem('logged_in'));

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
      const body = document.querySelector('body');
      body.classList.remove('no-scroll');
    });
  }, []);

  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setShowMenu(!showMenu);
      const body = document.querySelector('body');
      body.classList.toggle('no-scroll');
    }
  };

  const keyInput = (e) => {
    if (e.code === 'Enter') {
      toggleMenu();
    }
  };

  const clearUserData = () => {
    localStorage.clear();
    dispatch(logout());
    toggleMenu();
    navigate('/');
  };

  return (
    <header>
      <i
        className={
          !showMenu
            ? 'menuButton fa-solid fa-bars '
            : 'menuButton fa-solid fa-xmark'
        }
        onClick={toggleMenu}
        onKeyDown={keyInput}
        tabIndex="0"
        aria-label="burger menu button"
        role="button"
      />

      <nav className={!showMenu ? 'display-none' : ''}>
        <NavLink to="/" className="logo" onClick={toggleMenu}>
          QuickMaths
        </NavLink>

        {isLoggedIn ? (
          <ul className="menuLinks">
            <li>
              <NavLink to="/" onClick={toggleMenu}>
                Tutors
              </NavLink>
            </li>
            <li>
              <NavLink to="/reserve" onClick={toggleMenu}>
                Reserve
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservations" onClick={toggleMenu}>
                My reservations
              </NavLink>
            </li>
            <li>
              <NavLink to="/add_tutor" onClick={toggleMenu}>
                Add tutor
              </NavLink>
            </li>
            <li>
              <NavLink to="/delete_tutor" onClick={toggleMenu}>
                Delete tutor
              </NavLink>
            </li>
          </ul>
        ) : (
          <button className="login-button" type="button">
            <NavLink
              to="/user/login"
              onClick={toggleMenu}
            >
              Log in
            </NavLink>
          </button>
        )}

        <div className="logout-sm">
          {isLoggedIn && (
            <button
              className="logout-btn"
              type="button"
              onClick={clearUserData}
            >
              Logout
            </button>
          )}

          <ul className="socialLinks">
            <li>
              <a
                href="https://facebook.com"
                onClick={toggleMenu}
                target="_blank"
                rel="noreferrer"
                aria-label="facebook page"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                onClick={toggleMenu}
                target="_blank"
                rel="noreferrer"
                aria-label="twitter page"
              >
                <i className="fa-brands fa-twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                onClick={toggleMenu}
                target="_blank"
                rel="noreferrer"
                aria-label="instagram page"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
          </ul>
        </div>

        <div className="navRights">All rights reserved</div>
      </nav>
    </header>
  );
};

export default Nav;
