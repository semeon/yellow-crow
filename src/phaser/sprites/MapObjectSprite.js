import Phaser from 'phaser'
import SpriteHighlighter from './SpriteHighlighter'

export default class MapObject extends Phaser.Sprite {
  constructor (props) {
		let higlightColor = 0x000000
		if (props.higlightColor) higlightColor = props.higlightColor

    super(props.game, props.x, props.y, props.asset)

		this.game = props.game

		this.gameObj = props.gameObj
		this.inputEnabled = true
		this.events.onInputDown.add(this.onClick, this)
		this.tileSize = props.game.locationMap.tileSize

		this.actorHiglighter = new SpriteHighlighter({game: this.game, parent: this, colour: 0xdddd00})
		this.targetHiglighter = new SpriteHighlighter({game: this.game, parent: this, colour: 0xdd0000})
  }


	onLMBClick(props) {
		this.game.uiState.setSelectedTarget({target: this.gameObj})
	}

	onRMBClick(props) {
		this.onAttackClick()
	}

	onMMBClick(props) {
	}

	init() {
		
	}

  update () {
  		if ( this.game.uiState.isSelectedActor({actor: this.gameObj}) ) {
  			this.targetHiglighter.setOff()
  			this.actorHiglighter.setOn()
				
  		} else if (this.game.uiState.isSelectedTarget({target: this.gameObj})) {
  			this.actorHiglighter.setOff()
  			this.targetHiglighter.setOn()

  		} else {
  			this.actorHiglighter.setOff()
  			this.targetHiglighter.setOff()
  		}
  }

	onAttackClick() {
		if ( !this.game.uiState.isSelectedActor({actor: this.gameObj}) ) {
			if (this.game.uiState.isSelectedTarget({target: this.gameObj})) {
				this.game.gm.performAttack({actor: this.game.uiState.getSelectedActor(), target: this.game.uiState.getSelectedTarget() })

			} else {
				this.game.uiState.setSelectedTarget({target: this.gameObj})
			}
		}
	}

	onClick(props) {
		if (this.game.input.activePointer.leftButton.isDown) {
			console.log("> Left button click on: " + this.gameObj.getName() + " / " + this.gameObj.getId())
			this.onLMBClick()
			
		} else if(this.game.input.activePointer.rightButton.isDown) {
			console.log("> Right button click on: " + this.gameObj.getName() + " / " + this.gameObj.getId())
			this.onRMBClick()

		} else if(this.game.input.activePointer.middleButton.isDown) {
			console.log("> Middle button click on: " + this.gameObj.getName() + " / " + this.gameObj.getId())
			this.onMMBClick()
		}
		
	}
	

	
}
