import './Movie.css';
import Button from '../Button/Button'
import { Component } from 'react';

interface IProps {
  title: string,
  year: number,
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
