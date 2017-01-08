import React, {PropTypes} from 'react';

function CurrentUser({auth}) {
  return (
    <h1>Hi {auth.displayName}!</h1>
  );
}

CurrentUser.propTypes = {
  auth: PropTypes.object.isRequired
};

export default CurrentUser;
