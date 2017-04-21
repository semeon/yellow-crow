import Phaser from 'phaser'
import GameObject from './GameObjectSprite'

export default class Player extends GameObject {
  constructor (props) {
    super({game: props.game, 
					x: props.x, 
					y: props.y, 
					asset: props.asset, 
					gameObj: props.gameObj})
		
		this.tileSize = props.game.locationMap.tileSize
		this.isSelected = false
		this.highlighter = this.game.add.graphics()
    this.highlighter.kill()
    this.highlighter.lineStyle(3, 0xffff00, 1)
    this.highlighter.drawEllipse(this.x+this.tileSize/2, this.y+this.tileSize*0.85, this.tileSize/2, this.tileSize*0.15)			
  }
	
	select(props) {
		this.isSelected = true
    this.highlighter.revive()
	}

	unselect(props) {
    this.highlighter.kill()
		this.isSelected = false
	}

	onLMBClick(props) {
		this.gameObj.print({health: true})

		if(!this.isSelected) {
			this.select()
		} else {
			this.unselect()
		}
	}


}
