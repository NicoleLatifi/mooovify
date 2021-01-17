import './Results.css';
import Movie from '../Movie/Movie'
import { Component } from "react";
import { JsxEmit } from 'typescript';

interface IProps {
  searchResults: {Title: string, Year: number}[]
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
    console.log("Results componentDidMount called with", this.props.searchResults)
    const foundMovies = this.props.searchResults.map(movie => {
      return <Movie title={movie.Title} year={movie.Year} />
    })
    this.setState({ moviesToDisplay: foundMovies })
  }
  
  componentDidUpdate(prevProps: IProps) {
    if(this.props.searchResults !== prevProps.searchResults) {      
      console.log("Results componentDidUpdate called with", this.props.searchResults)
      const foundMovies = this.props.searchResults.map(movie => {
        console.log(movie)
        return <Movie title={movie.Title} year={movie.Year} />
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
