import { FirebaseList } from 'src/core/firebase';
import * as gameActions from './actions';
import { Game } from './game';


export const gameList = new FirebaseList({
  onAdd: gameActions.createGameSuccess
  // onChange: taskActions.updateTaskSuccess,
  // onLoad: taskActions.loadTasksSuccess,
  // onRemove: taskActions.deleteTaskSuccess
}, Game, 'games');
