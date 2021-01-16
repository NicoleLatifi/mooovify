import './App.css';
import Search from './Search/Search'
import Results from './Results/Results'
import Nominations from './Nominations/Nominations'

function App(): JSX.Element {
  return (
    <div>
      <h1>mooovify</h1>
      <Search />
      <Results />
      <Nominations />
    </div>
  );
}

export default App;
