import { List, Record } from 'immutable';

import {
  SIGN_OUT_SUCCESS
} from 'src/core/auth';

import {
  CREATE_USER_SUCCESS,
  LOAD_USERS_SUCCESS,
  DELETE_USER_SUCCESS,
  FILTER_USERS,
  UPDATE_USER_SUCCESS
} from './action-types';


export const UsersState = new Record({
  deleted: null,
  filter: '',
  list: new List(),
  previous: null
});


export function usersReducer(state = new UsersState(), {payload, type}) {
  switch (type) {
    case CREATE_USER_SUCCESS:
      return state.merge({
        deleted: null,
        previous: null,
        list: state.deleted && state.deleted.key === payload.key ?
              state.previous :
              state.list.unshift(payload)
      });

    case DELETE_USER_SUCCESS:
      return state.merge({
        deleted: payload,
        previous: state.list,
        list: state.list.filter(user => user.key !== payload.key)
      });

    case FILTER_USERS:
      return state.set('filter', payload.filterType || '');

    case LOAD_USERS_SUCCESS:
      return state.set('list', new List(payload.reverse()));

    case UPDATE_USER_SUCCESS:
      return state.merge({
        deleted: null,
        previous: null,
        list: state.list.map(user => {
          return user.key === payload.key ? payload : user;
        })
      });

    case SIGN_OUT_SUCCESS:
      return new UsersState();

    default:
      return state;
  }
}
