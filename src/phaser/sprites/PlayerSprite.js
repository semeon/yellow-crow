import Phaser from 'phaser'
import Actor from './ActorSprite'

export default class Player extends Actor {
  constructor (props) {
		if(!props.higlightColor) props.higlightColor =  0xffff00
    super(props)
		

		// this.isSelected = false
		// this.highlighter
  }
	

	onLMBClick(props) {
		this.game.uiState.resetSelectedTarget()
		this.game.uiState.setSelectedActor({actor: this.gameObj})
	}

}
