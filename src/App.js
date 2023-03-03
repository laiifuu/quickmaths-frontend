import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchTutors } from './redux/tutors/tutors';
import './App.css';
import Nav from './modules/Nav';
import Home from './modules/Home';
import Login from './modules/user-sessions/login';
import Signup from './modules/user-sessions/signup';
import SingleTutor from './modules/SingleTutor';
import Reserve from './modules/Reserve';
import Reservations from './modules/reservations';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTutors());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/tutor/:id" element={<SingleTutor />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
