import { useLocation } from 'react-router-dom';

const AddTutor = () => {
  const x = useLocation();
  console.log(x);
  return (<div>Hi</div>);
};

export default AddTutor;
