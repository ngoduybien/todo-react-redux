// import {getDeletedUser} from './selectors';
import {userList} from './user-list';
import {
  CREATE_USER_ERROR,
  CREATE_USER_SUCCESS,
  DELETE_USER_ERROR,
  DELETE_USER_SUCCESS,
  FILTER_USERS,
  LOAD_USERS_SUCCESS,
  UNDELETE_USER_ERROR,
  UNLOAD_USERS_SUCCESS,
  UPDATE_USER_ERROR,
  UPDATE_USER_SUCCESS
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

export function loadUsers() {
  return (dispatch, getState) => {
    const { auth } = getState();
    userList.path = 'users';
    userList.subscribe(dispatch);
  };
}

export function unloadUsers() {
  userList.unsubscribe();
  return {
    type: UNLOAD_USERS_SUCCESS
  };
}
