import React from 'react';
import {
  NO_CIRCLES,
  NO_PLAYER,
  PLAYER_1,
  PLAYER_2,
  GAME_STATE_IDLE,
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  GAME_STATE_DRAW,
} from '../constants';

const Header = ({ gameState, currentPlayer, winPlayer }) => {
  // Determine the text color based on the current player or win player
  const getTextColor = () => {
    if (gameState === GAME_STATE_WIN) {
      return 'green'; // Winning player text color
    } else if (currentPlayer === PLAYER_1) {
      return 'red'; // Player 1 text color
    } else if (currentPlayer === PLAYER_2) {
      return 'blue'; // Player 2 text color
    } else {
      return 'black'; // Default text color
    }
  };

  // Render the appropriate label based on the game state
  const renderLabel = () => {
    switch (gameState) {
      case GAME_STATE_PLAYING:
        return (
          <div style={{ color: getTextColor() }}>
            Player {currentPlayer} Turn
          </div>
        );
      case GAME_STATE_WIN:
        return (
          <div style={{ color: getTextColor() }}>
            Player {winPlayer} Wins!
          </div>
        );
      case GAME_STATE_DRAW:
        return <div style={{ color: getTextColor() }}>Game Is Draw!</div>;
      default:
        return null;
    }
  };

  return (
    <div className="panel header">
      <div className="header-text">{renderLabel()}</div>
    </div>
  );
};

export default Header;