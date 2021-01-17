import './Movie.css';
import Button from '../Button/Button'
import { Component } from 'react';

interface IProps {
  title: string,
  year: number,
}

class Movie extends Component<IProps> {
  constructor(props: IProps){
    super(props)
  }

  render() {
    return (
      <div>
        <h3>{this.props.title} ({this.props.year})</h3>
        <Button />
      </div>
    );
  }
}

export default Movie;
