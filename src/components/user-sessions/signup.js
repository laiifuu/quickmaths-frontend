import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userSession } from '../../redux/user/session-redux';
import './user.scss';

const Signup = () => {
  const dispatch = useDispatch();

  const redirection = useNavigate();

  const userData = useSelector((state) => state.userReducer);

  const [usernameState, setUsernameState] = useState('');
  const [existState, setExistState] = useState(false);
  const [validState, setValidState] = useState(false);
  const [validMsgState, setValidMsgState] = useState('');
  const [validDisplayState, setValidDisplayState] = useState(false);

  const userDispatch = () => {
    if (validState) {
      dispatch(userSession({ username: usernameState }, 'signup'));
    }
  };

  const validate = () => {
    if (usernameState.length === 0) {
      setValidMsgState('Username field can not be empty');
      setValidDisplayState(true);
    } else if ((usernameState.length > 1) && usernameState.length < 5) {
      setValidMsgState('Username must be at least 5 characters');
      setValidDisplayState(true);
    } else if (usernameState.length > 5) {
      setValidState(true);
      userDispatch();
    }
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
        <h1>Get Started</h1>
      </div>
      <form action="" className="user-form flex">
        <label htmlFor="username" className="flex">
          Username
          <input
            type="input"
            name="username"
            id="username"
            placeholder="(6 minimum characters)"
            onChange={setUsername}
          />
        </label>
        <div
          className="error"
          style={{
            display: existState ? 'inherit' : 'none',
          }}
        >
          <p>{userData.message}</p>
        </div>
        <div
          className="error"
          style={{
            display: validDisplayState ? 'inherit' : 'none',
          }}
        >
          <p>{validMsgState}</p>
        </div>
        <button
          type="button"
          name="signup"
          className="session-btn"
          onClick={validate}
        >
          Sign up
        </button>
        <Link to="/user/login">
          <p
            className="session-redirect"
          >
            <em>Already a member? Login...</em>
          </p>
        </Link>
      </form>
    </section>
  );
};

export default Signup;
