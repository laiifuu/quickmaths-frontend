import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SessionPage from './components/user-sessions/session';
import Greeting from './components/user-sessions/testing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/user/session" element={<SessionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
