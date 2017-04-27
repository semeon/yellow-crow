import Phaser from 'phaser'
import Actor from './ActorSprite'

export default class Player extends Actor {
  constructor (props) {
    super({game: props.game, 
					x: props.x, 
					y: props.y, 
					asset: props.asset, 
					gameObj: props.gameObj})
		
		this.higlightColor = 0xffff00

		// this.isSelected = false
		// this.highlighter
  }
	
	// init() {
	// 	this.highlighter = this.game.add.graphics()
	//     this.highlighter.kill()
	//     this.highlighter.lineStyle(3, this.higlightColor, 1)
	//     this.highlighter.drawEllipse(this.x+this.tileSize/2, this.y+this.tileSize*0.85, this.tileSize/2, this.tileSize*0.15)
	// }
	
	// select(props) {
	// 	this.isSelected = true
	//     this.highlighter.revive()
	// }
	//
	// unselect(props) {
	//     this.highlighter.kill()
	// 	this.isSelected = false
	// }
	//
	// onLMBClick(props) {
	// 	this.gameObj.print({health: true})
	//
	// 	if(!this.isSelected) {
	// 		this.select()
	// 	} else {
	// 		this.unselect()
	// 	}
	// }



}
