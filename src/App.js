import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './modules/Nav';
import Home from './modules/Home';
import Login from './modules/Login';
import AddTutor from './modules/user-actions/AddTutor';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add_tutor" element={<AddTutor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
