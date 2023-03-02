import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './modules/user-sessions/login';
import Signup from './modules/user-sessions/signup';
import Nav from './modules/Nav';
import Home from './modules/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
