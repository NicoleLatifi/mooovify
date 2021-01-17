import './Button.css';
import { Component } from 'react';

interface IProps {
  isNominated: boolean,
  toggleNomination: any,
}

interface IState {
  buttonText: string
}

class Button extends Component<IProps, IState> {
  constructor(props: IProps){
    super(props)
    this.state = {
      buttonText: this.props.isNominated? "Remove" : "Nominate"
    }
  }

  render() {
    return (
      <button onClick={this.props.toggleNomination}>
        {this.state.buttonText}
      </button>
    );
  }
}

export default Button;
