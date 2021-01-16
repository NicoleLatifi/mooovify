import './Results.css';
import Movie from '../Movie/Movie'

function Results(): JSX.Element {
  const movies = [<Movie />, <Movie />]

  return (
    <div>
      <h2>Results</h2>
      {movies}
    </div>
  );
}

export default Results;
