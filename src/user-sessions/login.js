import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserReservation } from '../redux(login)/user-reducer-container/user-login';
import './user.scss';

const Loginpage = () => {
  const dispatch = useDispatch();

  const redirection = useNavigate();

  const userData = useSelector((state) => state.userLoginReducer);

  const [usernameState, setUsernameState] = useState('');
  const [existState, setExistState] = useState(false);

  const loggedIn = () => {
    dispatch(fetchUserReservation({ username: usernameState }));
  };

  const setUsername = (e) => {
    setUsernameState(e.target.value);
  };

  useEffect(() => {
    if (userData.message === 'User not found.') {
      setExistState(true);
    }
    if (userData.logged_in === true) {
      setExistState(false);
      localStorage.setItem('logged_in', true);
    }
    if (localStorage.getItem('logged_in') === 'true') {
      redirection('/');
    }
  }, [userData.message, userData.logged_in, redirection]);

  return (
    <section className="user-page flex">
      <div>
        <h1>Welcome back</h1>
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
          name="login"
          className="login-btn"
          onClick={loggedIn}
        >
          Login
        </button>
        <div className="separator flex">
          <p>
            Or
          </p>
        </div>
        <Link to="/signup">
          <button
            type="button"
            name="signup"
            id="signup"
          >
            Sign up
          </button>
        </Link>
      </form>
    </section>
  );
};

export default Loginpage;
