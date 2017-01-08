import React, {Component, PropTypes} from 'react';


class CreateGame extends Component {
  static propTypes = {
    createGame: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    //this.state = {user: ''};

    this.onClick = ::this.onClick;
  }

  onClick(event) {
    console.log('CreateGame onClock');
    console.log(this.props.auth)
    this.props.createGame(this.props.auth.id)
  }

  render() {
    return (
      <button type="button" onClick={this.onClick}>Click me</button>
    );
  }
}

export default CreateGame;
