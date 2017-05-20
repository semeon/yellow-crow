import MapObject from '../sprites/MapObjectSprite'
import Actor from '../sprites/ActorSprite'
import Player from '../sprites/PlayerSprite'
import TerrainObject from '../sprites/TerrainObjectSprite'


export function placeTerrain(props) {
	for (let i=0; i<this.locationData.terrain.length; i++) {
		let mapObj = this.locationData.terrain[i]

		let sprite  = new TerrainObject({
      game: this.game,
      x: mapObj.x * this.tileSize,
      y: mapObj.y * this.tileSize,
			tileX: mapObj.x,
			tileY: mapObj.y,
      asset: mapObj.object.assetId,
			gameObj: mapObj.object
    })				
		sprite.init()
    this.game.add.existing(sprite)
		this.mapTerrainGroup.add(sprite)
		this.allObstacles.add(sprite)
	}
}

export function placeCreatures(props) {
	for (let i=0; i<this.locationData.creatures.length; i++) {
		let mapObj = this.locationData.creatures[i]

		let sprite  = new Actor({
      game: this.game,
      x: mapObj.x * this.tileSize,
      y: mapObj.y * this.tileSize,
			tileX: mapObj.x,
			tileY: mapObj.y,
      asset: mapObj.object.assetId,
			gameObj: mapObj.object
    })				
		sprite.init()
    this.game.add.existing(sprite)
		this.mapCreaturesGroup.add(sprite)
		this.allObstacles.add(sprite)
	}
}

export function placePlayers(props) {
	for (let i=0; i<this.playerData.length; i++) {
		let pc = this.playerData[i]

		let sprite  = new Player({
      game: this.game,
      x: 1 * this.tileSize,
      y: (3 + i*2) * this.tileSize,
			tileX: 1,
			tileY: 3 + i*2,
      asset: pc.assetId,
			gameObj: pc
    })				
		sprite.init()
		if (i==0) sprite.select()
    this.game.add.existing(sprite)
    this.game.add.existing(sprite)
		this.playerCharGroup.add(sprite)
		this.allObstacles.add(sprite)
	}
}