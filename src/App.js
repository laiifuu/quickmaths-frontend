import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTutors } from './redux/tutors/tutors';
import MainPage from './components/MainPage';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTutors());
  }, [dispatch]);

  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
