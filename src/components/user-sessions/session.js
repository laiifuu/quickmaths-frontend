import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSession } from '../../redux/user/session-redux';
import './user.scss';

const SessionPage = () => {
  const dispatch = useDispatch();

  const redirection = useNavigate();

  const userData = useSelector((state) => state.userReducer);

  const [usernameState, setUsernameState] = useState('');
  const [existState, setExistState] = useState(false);
  const [signupState, setSignupState] = useState(true);
  const [validState, setValidState] = useState(false);
  const [validMsgState, setValidMsgState] = useState('');
  const [validDisplayState, setValidDisplayState] = useState(false);

  const userDispatch = () => {
    if (validState) {
      if (signupState) {
        dispatch(userSession({ username: usernameState }, 'signup'));
      } else {
        dispatch(userSession({ username: usernameState }, 'login'));
      }
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
        <h1>{signupState ? 'Get Started' : 'Welcome Back'}</h1>
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
          <p>{userData ? userData.message : 'Something went wrong'}</p>
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
          name={signupState ? 'signup' : 'login'}
          className="session-btn"
          onClick={validate}
        >
          {signupState ? 'Sign up' : 'Login'}
        </button>
        <div className="separator flex">
          <p>
            Or
          </p>
        </div>
        <button
          type="button"
          name="switch"
          id="switch"
          className="session-btn"
          onClick={() => {
            if (signupState === true) {
              setSignupState(false);
            } else if (signupState === false) {
              setSignupState(true);
            }
          }}
        >
          {signupState ? 'Login' : 'Sign up'}
        </button>
      </form>
    </section>
  );
};

export default SessionPage;
