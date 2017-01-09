import React, {PropTypes} from 'react';
import {List} from 'immutable';

function ListGames({games}) {
  let gameItems = games.map((game, index) => {
    return (
      <div key={index}>{game}</div>
    );
  });

  return (
    <div className="task-list">
      {gameItems}
    </div>
  );
}

ListGames.propTypes = {
  games: PropTypes.instanceOf(List).isRequired
};

export default ListGames;
