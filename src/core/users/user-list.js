import { FirebaseList } from 'src/core/firebase';
import * as userActions from './actions';
import { User } from './user';


export const userList = new FirebaseList({
  onAdd: userActions.createUserSuccess,
  onChange: userActions.createUserSuccess,
  onLoad: userActions.createUserSuccess,
  onRemove: userActions.createUserSuccess
}, User);
