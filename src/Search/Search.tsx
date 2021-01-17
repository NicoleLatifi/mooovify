import './Search.css';
import { Component } from "react";

interface IProps {
  getMovies: any
}

interface IState {
  searchTerm: string
}
class Search extends Component<IProps, IState> {
  constructor(props: IProps){
    super(props)
    this.state = {
      searchTerm: ""
    }
  }

  updateSearchTerm = (event: any) => {
    // this.setState({ searchTerm: event.target.value })
    // this.props.getMovies(this.state.searchTerm)
    this.props.getMovies(event.target.value)
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <input placeholder="movie title" onChange={this.updateSearchTerm}></input>
      </div>
    );
  };
};

export default Search;
