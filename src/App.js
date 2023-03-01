import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/user-sessions/login';
import Signup from './components/user-sessions/signup';
import Greeting from './components/user-sessions/testing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
