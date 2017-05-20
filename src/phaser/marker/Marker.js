
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
	
		this.moveTo({
				x: this.board.currentLayer.getTileX(this.game.input.activePointer.worldX) * this.board.tileSize,
				y: this.board.currentLayer.getTileY(this.game.input.activePointer.worldY) * this.board.tileSize
		})		
	}

	
	moveTo(props) {
		this.x = props.x
		this.y = props.y
		for (let i in this.currentMarker) {
			let item = this.currentMarker[i]
			item.object.x = props.x + item.offsetX
			item.object.y = props.y + item.offsetY
		}
	}

	changeTo(props) {
		
	}

	createDestMarker() {

		let destMarker = {}

		destMarker.frame = {}
		destMarker.frame.offsetX = 0
		destMarker.frame.offsetY = 0
		destMarker.frame.object = this.game.add.sprite(this.x+destMarker.frame.offsetX, this.y+destMarker.frame.offsetX, 'marker_move')
		this.group.add(destMarker.frame.object)

		destMarker.info = {}
		destMarker.info.offsetX = 32
		destMarker.info.offsetY = 0
		destMarker.info.object = this.game.add.sprite(this.x+destMarker.info.offsetX, this.y+destMarker.info.offsetY, 'marker_move_info')
		this.group.add(destMarker.info.object)


		destMarker.text = {}
		destMarker.text.offsetX = 35
		destMarker.text.offsetY = 1
		destMarker.text.object = this.game.add.text(
			this.x+destMarker.text.offsetX, 
			this.y+destMarker.text.offsetY, 
			"AP:12", 
			{
        font: "8px Arial",
        fill: "#000000",
        align: "left"
			}
		)
		this.group.add(destMarker.text.object)


		return destMarker
	}
	
	

}