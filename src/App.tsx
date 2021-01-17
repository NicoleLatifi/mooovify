import './App.css';
import Search from './Search/Search'
import Results from './Results/Results'
import Nominations from './Nominations/Nominations'
import { useState } from 'react';

function App(): JSX.Element {
  const [ results, setResults ] = useState<any>([]);
  const [ message, setMessage ] = useState<string>("");

  async function getMovies(searchTerm: string) {
    console.log(results)
    console.log('search', searchTerm)
    const data = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`)
    const response = await data.json()
    console.log(response.Search)
    if(response.Search && response.Search.length > 0) {
      setResults(response.Search)
      setMessage("")
    } else {
      setMessage("No results to display, keep typing!")
    }
  }

  return (
    <div>
      <h1>mooovify</h1>
      <Search getMovies={getMovies}/>
      {message}
      <Results searchResults={results} />
      <Nominations />
    </div>
  );
}

export default App;
