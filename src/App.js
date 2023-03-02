import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './modules/Nav';
import Home from './modules/Home';
import Login from './modules/Login';
import AddItem from './modules/user-actions/addItem';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add_tutor" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
