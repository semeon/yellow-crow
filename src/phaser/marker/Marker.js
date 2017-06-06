
export default class Marker {

	constructor(props) {
		this.game = props.game
		this.board = props.board
		
		this.x = 0
		this.y = 0
		
		this.group
		this.markers = {}
		this.currentMarker
	}
	
	init(props) {
		this.group = this.game.add.group()

		this.markers["move"] = this.createDestMarker()
		this.currentMarker = this.markers["move"]
		
		this.game.world.bringToTop(this.group)
		
	}

	update(props) {
		this.game.iso.unproject(this.game.input.activePointer.position, this.board.cursorPos)
		let x = this.board.cursorPos.x - ( this.board.cursorPos.x % this.board.tileSize )
		let y = this.board.cursorPos.y - ( this.board.cursorPos.y % this.board.tileSize )
		this.moveTo({
				x: x,
				y: y
		})
	}

	moveTo(props) {
		this.currentMarker.isoX = props.x
		this.currentMarker.isoY = props.y
	}

	changeType(props) {
		
	}

	createDestMarker() {

		let destMarker = {}

		destMarker = this.game.add.isoSprite(this.x, this.y, 0, 'marker_move', 0)
		destMarker.anchor.set(0.5, 0)
		this.group.add(destMarker)
		
		let infoPlate = this.game.add.graphics()
		infoPlate.beginFill(0xffff00)
    infoPlate.drawRect(this.board.tileSize/2, 0, 24, 10) 
		infoPlate.endFill()


		let text = this.game.add.text(
			this.board.tileSize/2 + 1,
			0,
			"AP:12",
			{
        font: "8px Arial",
        fill: "#000000",
        align: "left"
			}
		)

		infoPlate.addChild(text)
  	destMarker.addChild(infoPlate)

		return destMarker
	}
	
	

}