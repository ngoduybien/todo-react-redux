//import {getDeletedTask} from './selectors';
import {gameList} from './game-list';
import {
  CREATE_GAME_SUCCESS,
  CREATE_GAME_ERROR,
} from './action-types';


export function createGame(userId) {
  return dispatch => {
    const game = {host: userId, participants: [userId]};
    console.log(game);
    gameList.push(game)
      .catch(error => dispatch(createGameError(error)));
  };
}

export function createGameError(error) {
  return {
    type: CREATE_GAME_ERROR,
    payload: error
  };
}

export function createGameSuccess(game) {
  return {
    type: CREATE_GAME_SUCCESS,
    payload: game
  };
}

export function loadGames() {
  return (dispatch, getState) => {
    const { auth } = getState();
    gameList.path = `tasks/${auth.id}`;
    gameList.subscribe(dispatch);
  };
}

