import Phaser from 'phaser'
let PF = require('pathfinding')


export default class Pathfinder {
  constructor (props) {
		this.finder = new PF.AStarFinder()
		this.width = props.width
		this.height = props.height

		this.grid
		this.path
  }
	
	buildGrid(props) {
		this.grid = new PF.Grid(this.width, this.height)
	}
	
	find(props) {
		let grid = this.grid.clone()
		let x1 = 0
		let y1 = 0
		let x2 = props.destX
		let y2 = props.destY
		this.path = this.finder.findPath(x1, y1, x2, y2, grid)

		console.log(">>> Path:")
		console.dir(this.path)
	}

}
