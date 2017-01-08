import React, {Component, PropTypes} from 'react';


class CurrentUser extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  constructor(props, context) {
    super(props, context);

    //this.state = {user: ''};
  }


  render() {
    return (
      <h1>Hi {this.props.auth.displayName}!</h1>
    );
  }
}

export default CurrentUser;
