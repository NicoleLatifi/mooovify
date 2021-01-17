import './App.css';
import Search from './Search/Search'
import Results from './Results/Results'
import Nominations from './Nominations/Nominations'
import { search } from './helpers/apiCalls'
import { useEffect, useState } from 'react';

function App(): JSX.Element {
  const [ results, setResults ] = useState<any>([]);
  
  useEffect(() => {
    const term: string = "rambo"
    const getMovies = async (searchTerm: string) => {
      const data = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=5a355246`)
      const response = await data.json()
      setResults(response.Search)
    }
    getMovies(term)
  }, [])

  return (
    <div>
      <h1>mooovify</h1>
      <h2>{(results[0])? results[0].Title : "loading" }</h2>
      <Search />
      <Results />
      <Nominations />
    </div>
  );
}

export default App;
