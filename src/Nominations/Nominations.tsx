import './Nominations.css';
import Movie from '../Movie/Movie'
import { Component } from "react";

interface IProps {
  nominationsToDisplay: {id: string, title: string, year: number}[],
  updateNominations: any,
}

interface IState {
  nominatedMovies: JSX.Element[];
}

class Nominations extends Component<IProps, IState> {
  constructor(props: IProps){
    super(props)
    this.state = {
      nominatedMovies: []
    };
  };

  componentDidUpdate(prevProps: IProps) {
    if(this.props.nominationsToDisplay !== prevProps.nominationsToDisplay) {
      const movies = this.props.nominationsToDisplay.map(movie => {
        return <Movie id={movie.id} title={movie.title} year={movie.year} updateNominations={this.props.updateNominations} />
      });
      this.setState({ nominatedMovies: movies })
    }
  };
  
  render() {
    return (
      <div>
        <h2>Nominations</h2>
        {this.state.nominatedMovies}
      </div>
    );
  };
};

export default Nominations;
