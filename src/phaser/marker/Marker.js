
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
    // this.marker.x = this.currentLayer.getTileX(this.game.input.activePointer.worldX) * this.tileSize
    // this.marker.y = this.currentLayer.getTileY(this.game.input.activePointer.worldY) * this.tileSize
		this.game.iso.unproject(this.game.input.activePointer.position, this.board.cursorPos)

		let x = this.board.cursorPos.x - ( this.board.cursorPos.x % this.board.tileSize )
		let y = this.board.cursorPos.y - ( this.board.cursorPos.y % this.board.tileSize )
	
		this.moveTo({
				x: x,
				y: y
		})		
	}

	
	moveTo(props) {
		
		this.x = props.x
		this.y = props.y
		for (let i in this.currentMarker) {
			let item = this.currentMarker[i]
			
			item.object.isoX = props.x + item.offsetX
			item.object.isoY = props.y + item.offsetY
		}
	}

	changeTo(props) {
		
	}

	createDestMarker() {

		let destMarker = {}

		destMarker.frame = {}
		destMarker.frame.offsetX = 0
		destMarker.frame.offsetY = 0
		destMarker.frame.object = this.game.add.isoSprite(this.x+destMarker.frame.offsetX, this.y+destMarker.frame.offsetX, 0, 'marker_move', 0)
		destMarker.frame.object.anchor.set(0.5, 0)
		this.group.add(destMarker.frame.object)

		destMarker.info = {}
		destMarker.info.offsetX = 0
		destMarker.info.offsetY = 0
		destMarker.info.object = this.game.add.isoSprite(this.x+destMarker.info.offsetX, this.y+destMarker.info.offsetY, 0, 'marker_move_info', 0)
		destMarker.info.object.anchor.set(-0.5, 0)
		this.group.add(destMarker.info.object)

		let text = this.game.add.text(
			this.board.tileSize / 2,
			0,
			"AP:12",
			{
        font: "8px Arial",
        fill: "#000000",
        align: "left"
			}
		)
		
		destMarker.info.object.addChild(text)

		return destMarker
	}
	
	

}