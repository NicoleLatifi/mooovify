import './App.css';
import Search from './Search/Search'
import Results from './Results/Results'
import Nominations from './Nominations/Nominations'
import { useState } from 'react';

function App(): JSX.Element {
  const [ results, setResults ] = useState<any>([]);
  const [ message, setMessage ] = useState<string>("");
  const [ nominations, setNominations ] = useState<{id: string, title: string, year: number}[]>([])

  async function getMovies(searchTerm: string) {
    const data = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_API_KEY}`)
    const response = await data.json()
    if(response.Search && response.Search.length > 0) {
      setResults(response.Search)
      setMessage("")
    } else {
      setMessage("No results to display, keep typing!")
    }
  }

  function updateNominations(movie: {id: string, title: string, year: number}) {
    setNominations(nominations => [...nominations, movie])
  }

  return (
    <div>
      <h1>mooovify</h1>
      <Search getMovies={getMovies}/>
      {message}
      <Results searchResults={results} updateNominations={updateNominations} />
      <Nominations nominationsToDisplay={nominations} updateNominations={updateNominations} />
    </div>
  );
};

export default App;
