// import {getDeletedTask} from './selectors';
import {userList} from './user-list';
import {
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR
} from './action-types';


export function createUser(user) {
  return dispatch => {
    // console.log(user);
    userList.push({email: user, name: user})
      .catch(error => dispatch(createUserError(error)));
  };
}

export function createUserError(error) {
  return {
    type: CREATE_USER_ERROR,
    payload: error
  };
}

export function createUserSuccess(user) {
  return {
    type: CREATE_USER_SUCCESS,
    payload: user
  };
}

