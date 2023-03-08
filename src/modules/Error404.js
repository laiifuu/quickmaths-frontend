import { Link } from 'react-router-dom';

const Error404 = () => (
  <div>
    <h1> Error 404 </h1>
    <p> The page was not found </p>
    <Link to="/"> Return to the main page</Link>
  </div>
);

export default Error404;
