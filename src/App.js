import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './components/user-actions/addItem';
import RemoveItem from './components/user-actions/deleteitem';
import SessionPage from './components/user-sessions/session';
import Greeting from './components/user-sessions/testing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/new_tutor" element={<AddItem />} />
        <Route path="/remove_tutor" element={<RemoveItem />} />
        <Route path="/user/session" element={<SessionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
