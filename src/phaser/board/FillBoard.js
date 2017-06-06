import MapObject from '../sprites/MapObjectSprite'
import Actor from '../sprites/ActorSprite'
import Player from '../sprites/PlayerSprite'
import TerrainObject from '../sprites/TerrainObjectSprite'


export function placeTiles(props) {

	for (let tileX=0; tileX<this.width; tileX++) {
		for (let tileY=0; tileY<this.height; tileY++) {
			let tileOblject  = new MapObject({
	      game: this.game,
	      x: tileX * this.tileSize,
	      y: tileY * this.tileSize,
				tileX: tileX,
				tileY: tileY,
	      asset: 'tile',
				gameObj: null				
	    })
	    tileOblject.sprite.anchor.set(0.5, 0)
			tileOblject.init()
	    this.game.add.existing(tileOblject.sprite)
		}
	}
}

export function placeTerrain(props) {
	for (let i=0; i<this.locationData.terrain.length; i++) {
		let mapObj = this.locationData.terrain[i]

		let terrainObject  = new TerrainObject({
      game: this.game,
      x: mapObj.x * this.tileSize,
      y: mapObj.y * this.tileSize,
			tileX: mapObj.x,
			tileY: mapObj.y,
      asset: mapObj.object.assetId,
			gameObj: mapObj.object
    })
		terrainObject.init()
    this.game.add.existing(terrainObject.sprite)
		this.mapTerrainGroup.add(terrainObject.sprite)
		this.allObstacles.add(terrainObject.sprite)
	}
}


export function placeCreatures(props) {
	for (let i=0; i<this.locationData.creatures.length; i++) {
		let mapObj = this.locationData.creatures[i]

		let actorObject  = new Actor({
      game: this.game,
      x: mapObj.x * this.tileSize,
      y: mapObj.y * this.tileSize,
			tileX: mapObj.x,
			tileY: mapObj.y,
      asset: mapObj.object.assetId,
			gameObj: mapObj.object
    })				
		actorObject.init()
    this.game.add.existing(actorObject.sprite)
		this.mapCreaturesGroup.add(actorObject.sprite)
		this.allObstacles.add(actorObject.sprite)
	}
}


export function placePlayers(props) {
	for (let i=0; i<this.playerData.length; i++) {
		let pc = this.playerData[i]

		let playerObject  = new Player({
      game: this.game,
      x: 1 * this.tileSize,
      y: (3 + i*2) * this.tileSize,
			tileX: 1,
			tileY: 3 + i*2,
      asset: pc.assetId,
			gameObj: pc
    })				
		playerObject.init()
		if (i==0) playerObject.select()
    this.game.add.existing(playerObject.sprite)
    this.game.add.existing(playerObject.sprite)
		this.playerCharGroup.add(playerObject.sprite)
		this.allObstacles.add(playerObject.sprite)
	}
}