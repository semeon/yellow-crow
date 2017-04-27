import Phaser from 'phaser'
import SpriteHighlighter from './SpriteHighlighter'

export default class MapObject extends Phaser.Sprite {
  constructor (props) {
    super(props.game, props.x, props.y, props.asset)

		this.game = props.game

		this.gameObj = props.gameObj
		this.inputEnabled = true
		this.events.onInputDown.add(this.onClick, this)
		this.tileSize = props.game.locationMap.tileSize

		this.higlightColor = 0x000000
  }

	init() {
		this.higlighter = new SpriteHighlighter({game: this.game, parent: this, colour: this.higlightColor})
	}

  update () {
  }

	onClick(props) {
		if (this.game.input.activePointer.leftButton.isDown) {
			console.log("> Left button click on: " + this.gameObj.getName())
			this.onLMBClick()
			
		} else if(this.game.input.activePointer.rightButton.isDown) {
			console.log("> Right button click on: " + this.gameObj.getName())
			this.onRMBClick()

		} else if(this.game.input.activePointer.middleButton.isDown) {
			console.log("> Middle button click on: " + this.gameObj.getName())
			this.onMMBClick()
		}
		
	}
	
	onLMBClick(props) {
			this.higlighter.toggleHighlights()
	}

	onRMBClick(props) {
	}

	onMMBClick(props) {
	}
	
}
