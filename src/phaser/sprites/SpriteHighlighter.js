export default class SpriteHighlighter {
  constructor (props) {

		this.isOn = false
		this.higlightColor = props.colour
		this.parent = props.parent

		this.highlighter = props.game.add.graphics()
    this.highlighter.kill()
    this.highlighter.lineStyle(3, this.higlightColor, 1)
    this.highlighter.drawEllipse(	this.parent.x+this.parent.tileSize/2, 
																	this.parent.y+this.parent.tileSize*0.85, 
																	this.parent.tileSize/2, 
																	this.parent.tileSize*0.15)			
  }


	setOn(props) {
		this.isOn = true
    this.highlighter.revive()
	}

	setOff(props) {
    this.highlighter.kill()
		this.isOn = false
	}

	destroy() {
    this.highlighter.destroy()
		delete this
	}

	toggleHighlights(props) {
		if(!this.isOn) {
			this.setOn()
		} else {
			this.setOff()
		}
	}
}