export function onTileClick() {
	this.updateMatrix()

	let tileX = this.currentLayer.getTileX(this.game.input.activePointer.worldX)
	let tileY = this.currentLayer.getTileY(this.game.input.activePointer.worldY)
	let tileObjects = this.getTileObjects({x: tileX, y: tileY})

	console.log("----- Tile click: " + tileX + ":" + tileY + ". Objects:")
	console.dir(tileObjects)
	
	let startX = this.currentLayer.getTileX(this.game.uiState.getSelectedActorSprite().x)
	let startY = this.currentLayer.getTileY(this.game.uiState.getSelectedActorSprite().y)
	console.log("----- Selected player: " + startX + ":" + startY)

	this.path.clear()

	// Empty tile click
	if (tileObjects.length == 0) {
		this.path.build({startX: startX, startY: startY, destX: tileX, destY: tileY, matrix:this.mapMatrix})
		this.path.draw()

	// Object click
	} else {

	}
}