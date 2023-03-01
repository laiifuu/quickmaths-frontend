/*eslint-disable*/
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userSession } from '../../redux/user/session-redux';
import './user.scss';

const Login = () => {
  const dispatch = useDispatch();

  const redirection = useNavigate();

  const userData = useSelector((state) => state.userReducer);

  const [usernameState, setUsernameState] = useState('');
  const [existState, setExistState] = useState(false);

  const userDispatch = () => {
    dispatch(userSession({ username: usernameState }, 'login'));
  };

  const setUsername = (e) => {
    setUsernameState(e.target.value);
  };

  useEffect(() => {
    if (userData.logged_in === false) {
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
        dispatch(userSession({ username: user }, 'login'));
      }
      redirection('/');
    }
  }, [userData.message, userData.logged_in, redirection, dispatch, userData]);

  return (
    <section className="user-page flex">
      <div>
        <h1>Welcome Back</h1>
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
          className="error"
          style={{
            display: existState ? 'inherit' : 'none',
          }}
        >
          <p>{userData ? userData.message : 'Something went wrong'}</p>
        </div>
        <button
          type="button"
          name="login"
          className="session-btn"
          onClick={userDispatch}
        >
          Login
        </button>
        <Link to="/user/signup">
          <p
            className="session-redirect"
          >
            <em>Not a member? Sign Up...</em>
          </p>
        </Link>
      </form>
    </section>
  );
};

export default Login;
