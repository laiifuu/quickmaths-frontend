import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTutors } from './redux/tutors/tutors';
import Home from './components/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './modules/Nav';
import Home from './modules/Home';
import Login from './modules/Login';

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
        <Route path="/login" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
