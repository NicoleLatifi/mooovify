import './Results.css';
import Movie from '../Movie/Movie'
import { Component } from "react";

interface IProps {
  searchResults: []
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
      return <Movie />
    })
    this.setState({ moviesToDisplay: foundMovies })
  }
  
  render(){
    return (
    <div>
      <h2>Results</h2>
      {this.state.moviesToDisplay}
    </div>
    );
  };
};

export default Results;
