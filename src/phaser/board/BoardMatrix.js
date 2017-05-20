export function getTileObjects(props) {
	let result = []
	if (this.mapMatrixHash && this.mapMatrixHash[props.x] && this.mapMatrixHash[props.x][props.y]) result = this.mapMatrixHash[props.x][props.y]
	return result			
}

export function updateMatrix() {
	
	delete this.mapMatrixHash
	
	this.mapMatrixHash = null

	this.mapMatrixHash = {}

	for (let i=0; i<this.allObstacles.children.length; i++) {
		let mapObj = this.allObstacles.children[i]
		let x = mapObj.tileX
		let y = mapObj.tileY
		if (!this.mapMatrixHash[x]) this.mapMatrixHash[x] = {}
		if (!this.mapMatrixHash[x][y]) this.mapMatrixHash[x][y] = []
		this.mapMatrixHash[x][y].push(mapObj.obj)
	}

	console.log("updateMatrix()")
	this.mapMatrix = []

	console.dir(this.mapMatrix)

	for (let y=0; y<this.height; y++) {
		let row = []
		this.mapMatrix.push(row)
		for (let x=0; x<this.width; x++) {
			if (this.getTileObjects({x: x, y: y}).length > 0) {
				this.mapMatrix[y].push(1)
			} else {
				this.mapMatrix[y].push(0)
			}
		}
	}
	console.dir(this.mapMatrix)
}