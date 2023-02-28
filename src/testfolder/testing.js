/*eslint-disable*/

import React from 'react';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMessage } from '../redux/messages/message';

function Greeting() {
  // const dispatch = useDispatch();

  // const randomMsg = useSelector(
  //   (state) => state.messageReducer,
  // );

  // useEffect(() => {
  //   dispatch(fetchMessage());
  // }, [dispatch]);

  return (
    <div>
      <p>hello</p>
      <Link to="/login">
        <button
          type="button"
          name="signup"
          id="signup"
          >
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button
          type="button"
          name="signup"
          id="signup"
        >
          Sign up
        </button>
      </Link>
    </div>
  );
}

export default Greeting;
