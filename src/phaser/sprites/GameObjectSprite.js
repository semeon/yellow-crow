import Phaser from 'phaser'

export default class GameObject extends Phaser.Sprite {
  constructor ({ game, x, y, asset, gameObj }) {
    super(game, x, y, asset)
    // this.anchor.setTo(0.5)
		this.gameObj = gameObj
		this.inputEnabled = true
		this.events.onInputDown.add(this.onClick, this)
  }

	init() {
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
	}

	onRMBClick(props) {
	}

	onMMBClick(props) {
	}
	
}
