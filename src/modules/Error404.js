import { Link } from 'react-router-dom';

const Error404 = () => (
  <section className="page-404">
    <h2>Oops!</h2>
    <h1> Error 404 </h1>
    <p> The page was not found. </p>
    <Link to="/">
      {' '}
      <button type="button">Return to the main page</button>
    </Link>
  </section>
);

export default Error404;
