import React from 'react'
import {
  GAME_STATE_PLAYING,
  GAME_STATE_WIN,
  GAME_STATE_DRAW} from "../constants"

const Footer = ({onNewGameClick,onSuggestionClick,gameState}) => {

  const renderButton=()=>{
    if(gameState === GAME_STATE_PLAYING){
      return <button onClick={onSuggestionClick}>Suggest</button>
    }
    return <button onClick={onNewGameClick}>New Game</button>    
  }



  return (
    <div className='panel footer'>
      {renderButton()}

        </div>

    
  )
}

export default Footer;
