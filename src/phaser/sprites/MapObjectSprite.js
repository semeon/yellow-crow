import Phaser from 'phaser'
import SpriteHighlighter from './SpriteHighlighter'

export default class MapObject {
  constructor (props) {
		let higlightColor = 0x000000
		if (props.higlightColor) higlightColor = props.higlightColor

    // super(props.game, props.x, props.y, props.asset)

		this.game = props.game
		this.gameObj = props.gameObj


		this.inputEnabled = true
		this.tileSize = props.game.locationMap.tileSize
		
		this.tileX = props.tileX
		this.tileY = props.tileY

		this.sprite = this.game.add.isoSprite(props.x, props.y, 0, props.asset, 0)
    this.sprite.anchor.set(0.5, 0.15)

		this.actorHiglighter = new SpriteHighlighter({game: this.game, parent: this, colour: props.higlightColor})
		this.targetHiglighter = new SpriteHighlighter({game: this.game, parent: this, colour: 0xdd0000})

		this.sprite.events.onInputDown.add(this.onClick, this)
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
			
			if (this.gameObj.isDestroyed()) {
				console.log("> DESTROYED!")
				this.onDestroy()
			}
  }


	onDestroy() {
			this.actorHiglighter.destroy()
			this.targetHiglighter.destroy()
			this.destroy()
	}

	onAttackClick() {
		if ( !this.game.uiState.isSelectedActor({actor: this.gameObj}) ) {
			if (this.game.uiState.isSelectedTarget({target: this.gameObj})) {
				this.game.gm.performAttack({actor: this.game.uiState.getSelectedActor(), target: this.game.uiState.getSelectedTarget() })

			} else {
				this.game.uiState.setSelectedTarget({target: this.gameObj, sprite: this})
			}
		}
	}

	onClick(props) {
		if (this.game.input.activePointer.leftButton.isDown) {
			console.log("> LMB click on: " + 
											this.gameObj.getName() + " (" + this.gameObj.getId() + ") " + 
											this.gameObj.getHp() + "/" + this.gameObj.getHpMax())
			this.onLMBClick()
			
		} else if(this.game.input.activePointer.rightButton.isDown) {
			console.log("> RMB click on: " + this.gameObj.getName() + " / " + this.gameObj.getId())
			this.onRMBClick()

		} else if(this.game.input.activePointer.middleButton.isDown) {
			console.log("> MMB click on: " + this.gameObj.getName() + " / " + this.gameObj.getId())
			this.onMMBClick()
		}
		
	}
	

	
}
