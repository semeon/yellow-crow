import Phaser from 'phaser'
import PathFinder from './PathFinder'


export default class PathMarker {
  constructor (props) {

		this.game = props.game
		this.isOn = false
		this.colour = "0xffff00"
		this.tileSize = props.tileSize
		// this.path = props.path
		this.path = [
			[0, 0],
			[1, 0],
			[2, 0],
			[3, 1],
			[3, 2],
			[3, 3],
			[3, 4]
		]


		this.pathMarker
		this.markersGroup
  }

	init(props) {
		this.pathMarkerGroup = this.game.add.group()
		this.pathFinder = new PathFinder({width: props.map.width, height: props.map.height, data: null})
		this.pathFinder.buildGrid()
	}

	build(props) {
		this.path = this.pathFinder.find(props)
	}

	destroy() {
		this.pathMarkerGroup.removeAll(true)
	}

	draw(props) {
		this.destroy()

		for(let i=0; i<this.path.length; i++) {
			
			if (i == 0) continue
			
			let x1 = this.path[i-1][0] * this.tileSize + this.tileSize/2
			let y1 = this.path[i-1][1] * this.tileSize + this.tileSize/2

			let x2 = this.path[i][0] * this.tileSize + this.tileSize/2
			let y2 = this.path[i][1] * this.tileSize + this.tileSize/2


			let line = this.game.add.graphics()
			line.lineStyle(2, this.colour, 1)
			line.moveTo(x1, y1)
			line.lineTo(x2, y2)
			this.pathMarkerGroup.add(line)
			
			let pathMarker = this.game.add.graphics()
			pathMarker.lineStyle(6, this.colour, 1)
		  pathMarker.drawCircle(x2, y2, 2)

			this.pathMarkerGroup.add(pathMarker)
		}
	}

}
