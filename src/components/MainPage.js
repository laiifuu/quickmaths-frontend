import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTutors } from '../redux/tutors/tutors';
import Tutor from './Tutor';
// import Tutor from './Tutor';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTutors());
  }, [dispatch]);

  const { tutors } = useSelector((state) => state.tutors);

  return (
    <div className="heading">
      <h1>LATEST MODELS</h1>
      <h2>Please choose your favourite tutor!</h2>
      <div className="divider">
        {
          Array(20).map((e) => <div key={e.toString()} className="divider-bullet" />)
        }
      </div>
      <ul className="tutors-list">
        {tutors.map((item) => <li key={item.id}><Tutor obj={item} /></li>)}
      </ul>
    </div>
  );
};

export default MainPage;
