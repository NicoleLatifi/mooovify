import './Results.css';
import Movie from '../Movie/Movie'
import { Component } from "react";

interface IProps {
  searchResults: {imdbID: string, Title: string, Year: number}[],
  updateNominations: any,
}

interface IState {
  moviesToDisplay: JSX.Element[];
}
class Results extends Component<IProps, IState> {
  constructor(props: IProps){
    super(props)
    this.state = {
      moviesToDisplay: []
    }
  }

  componentDidMount() {
    const foundMovies = this.props.searchResults.map(movie => {
      return <Movie id={movie.imdbID} title={movie.Title} year={movie.Year} updateNominations={this.props.updateNominations} />
    })
    this.setState({ moviesToDisplay: foundMovies })
  }
  
  componentDidUpdate(prevProps: IProps) {
    if(this.props.searchResults !== prevProps.searchResults) {      
      const foundMovies = this.props.searchResults.map(movie => {
        return <Movie id={movie.imdbID} title={movie.Title} year={movie.Year} updateNominations={this.props.updateNominations} />
      })
      this.setState({ moviesToDisplay: foundMovies })
    }
  }
  
  render() {
    return (
    <div>
      <h2>Results</h2>
      {this.state.moviesToDisplay}
    </div>
    );
  };
};

export default Results;
