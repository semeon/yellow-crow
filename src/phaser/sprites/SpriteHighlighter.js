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

	highlight(props) {
		this.isOn = true
    this.highlighter.revive()
	}

	unhighlight(props) {
    this.highlighter.kill()
		this.isOn = false
	}

	toggleHighlights(props) {
		if(!this.isOn) {
			this.highlight()
		} else {
			this.unhighlight()
		}
	}
}