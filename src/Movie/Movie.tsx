import './Movie.css';
import Button from '../Button/Button'
import { Component } from 'react';

interface IProps {
  id: string,
  title: string,
  year: number,
  updateNominations: any,
}

interface IState {
  isNominated: boolean,
}

class Movie extends Component<IProps, IState> {
  constructor(props: IProps){
    super(props)
    this.state = {
      isNominated: false,
    }
  }

  toggleNomination = () => {
    this.setState({ isNominated: !this.state.isNominated })
    const movie = {
      id: this.props.id, 
      title: this.props.title, 
      year: this.props.year
    }
    this.props.updateNominations(movie)
  }

  render() {
    return (
      <div>
        <h3>{this.props.title} ({this.props.year})</h3>
        {!this.state.isNominated &&         
          <Button 
            isNominated={this.state.isNominated} 
            toggleNomination={this.toggleNomination}
          />
        }
      </div>
    );
  }
}

export default Movie;
