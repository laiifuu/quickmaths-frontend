import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../redux(login)/user-reducer-container/user-signup';
import { fetchUserReservation } from '../redux(login)/user-reducer-container/user-login';
import './user.scss';

const SignupPage = () => {
  const dispatch = useDispatch();

  const redirection = useNavigate();

  const userData = useSelector((state) => state.userSignupReducer);

  const [usernameState, setUsernameState] = useState('');
  const [existState, setExistState] = useState(false);

  const signup = () => {
    dispatch(createUser({ username: usernameState }));
  };

  const setUsername = (e) => {
    setUsernameState(e.target.value);
  };

  useEffect(() => {
    if (userData.message === 'Something went wrong.') {
      setExistState(true);
    }
    if (userData.logged_in === true) {
      setExistState(false);
      localStorage.setItem('logged_in', true);
      localStorage.setItem('user', userData.user.username);
    }
    if (localStorage.getItem('logged_in') === 'true') {
      const user = localStorage.getItem('user');
      if (!userData) {
        dispatch(fetchUserReservation({ username: user }));
      }
      redirection('/');
    }
  }, [userData.message, userData.logged_in, redirection, dispatch, userData]);

  return (
    <section className="user-page flex">
      <div>
        <h1>Get Started</h1>
      </div>
      <form action="" className="user-form flex">
        <label htmlFor="username" className="flex">
          Username
          <input
            type="input"
            name="username"
            id="username"
            onChange={setUsername}
          />
        </label>
        <div
          className="no_user"
          style={{
            display: existState ? 'inherit' : 'none',
          }}
        >
          <p>{userData ? userData.message : 'Something went wrong'}</p>
        </div>
        <button
          type="button"
          name="signup"
          className="signup-btn"
          onClick={signup}
        >
          Sign up
        </button>
        <div className="separator flex">
          <p>
            Or
          </p>
        </div>
        <Link to="/login">
          <button
            type="button"
            name="login"
            id="login"
          >
            Login
          </button>
        </Link>
      </form>
    </section>
  );
};

export default SignupPage;
