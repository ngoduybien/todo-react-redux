import React, { Component, PropTypes } from 'react';


class UserForm extends Component {
  static propTypes = {
    createUser: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    this.state = {user: ''};

    this.onChange = ::this.onChange;
    this.onKeyUp = ::this.onKeyUp;
    this.onSubmit = ::this.onSubmit;
  }

  clearInput() {
    this.setState({user: ''});
  }

  onChange(event) {
    this.setState({user: event.target.value});
  }

  onKeyUp(event) {
    if (event.keyCode === 27) {
      this.clearInput();
    }
  }

  onSubmit(event) {
    console.log('user onSubmit');
    event.preventDefault();
    const user = this.state.user.trim();
    console.log(user);
    if (user.length) this.props.createUser(user);
    this.clearInput();
  }

  render() {
    return (
      <form className="task-form" onSubmit={this.onSubmit} noValidate>
        <input
          autoComplete="off"
          autoFocus
          className="task-form__input"
          maxLength="64"
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
          placeholder="Enter username..."
          ref={c => this.userInput = c}
          type="text"
          value={this.state.user}
        />
      </form>
    );
  }
}

export default UserForm;
