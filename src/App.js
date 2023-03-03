import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchTutors } from './redux/tutors/tutors';
import './App.css';
import Nav from './modules/Nav';
import Home from './modules/Home';
import Login from './modules/user-sessions/login';
import Signup from './modules/user-sessions/signup';
import AddTutor from './modules/user-actions/AddTutor';
import { userSession } from './redux/user/session-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTutors());
    if (localStorage.getItem('user')) {
      const username = localStorage.getItem('user');
      dispatch(userSession({ username }, 'login'));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/add_tutor" element={<AddTutor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
