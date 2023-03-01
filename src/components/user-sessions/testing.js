/*eslint-disable*/

import React from 'react';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchMessage } from '../redux/messages/message';

function Greeting() {

  return (
    <div>
      <p>hello</p>
      <Link to="/user/signup">
        <button
          type="button"
          name="session"
          id="session"
          >
          session
        </button>
      </Link>
    </div>
  );
}

export default Greeting;
