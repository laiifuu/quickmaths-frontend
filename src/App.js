import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTutors } from './redux/tutors/tutors';
import Home from './components/Home';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTutors());
  }, [dispatch]);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
