import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignupPage from './user-sessions/signup';
import Loginpage from './user-sessions/login';
import Greeting from './testfolder/testing';

function App() {
  return (
    // <div className="App">
    //   <h1>Hello</h1>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
