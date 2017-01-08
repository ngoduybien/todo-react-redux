import { FirebaseList } from 'src/core/firebase';
import * as userActions from './actions';
import { User } from './user';


export const userList = new FirebaseList({
  onAdd: userActions.createUserSuccess
  // onChange: taskActions.updateTaskSuccess,
  // onLoad: taskActions.loadTasksSuccess,
  // onRemove: taskActions.deleteTaskSuccess
}, User, 'users');
