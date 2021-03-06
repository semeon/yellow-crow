// EXAMPLE: https://phaser.io/examples/v2/tilemaps/blank-tilemap

import Phaser from 'phaser'
import {logger} from 'logger'

import Marker from '../marker/Marker'
import Path from '../path/Path'

import MapObject from '../sprites/MapObjectSprite'
import Actor from '../sprites/ActorSprite'
import Player from '../sprites/PlayerSprite'
import TerrainObject from '../sprites/TerrainObjectSprite'

export default class LocationMap {

	constructor(props) {
		this.game = props.game

		this.locationData = props.data
		this.playerData = props.playerData

		this.tileSize = props.tile
		this.width = props.data.width
		this.height = props.data.height

		this.map
		this.mapObjectsGroup
		this.mapTerrainGroup
		this.mapCreaturesGroup
		this.mapItemsGroup
		this.playerCharGroup

		this.mapMatrixHash
		this.mapMatrix

		this.layer1
		this.currentLayer



		this.marker = new Marker({game: props.game})
		this.path = new Path({game: props.game, tileSize: props.tile})
	}
	
	preload(props) {
		this.game.load.image('grass', 'assets/images/ground_4_32x32.png')
    this.game.load.image('droid', 'assets/images/droid_32x32.png')

    this.game.load.image('marker_move', 'assets/images/markers/marker_01.png')
    this.game.load.image('marker_move_info', 'assets/images/markers/marker_01_info.png')
		
    this.game.load.image('desert_sand', 'assets/images/desert/desert_sand_32x32.png')	
    this.game.load.image('desert_bush_01', 'assets/images/desert/desert_bush_01.png')	
    this.game.load.image('desert_bush_02', 'assets/images/desert/desert_bush_02.png')	
    this.game.load.image('desert_rock', 'assets/images/desert/desert_rock.png')	
	}
	
	init(props) {
		
		this.mapTerrainGroup = this.game.add.group()
		this.mapCreaturesGroup = this.game.add.group()
		this.mapItemsGroup = this.game.add.group()
		this.playerCharGroup = this.game.add.group()

		this.allObstacles = this.game.add.group()

		
		this.initMap()
		
		this.placeTerrain()
		this.placeCreatures()
		this.placePlayers()
		this.updateMatrix()

		this.game.world.bringToTop(this.allObstacles)

		this.marker.init()
		this.path.init({map: this, matrix: this.mapMatrix}) 
	}

	initMap(props) {
    let data = ""
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++)  {
        data += this.game.rnd.between(0, 3).toString()
        if (x < this.width-1) data += ','
      }
      if (y < this.height-1)  data += "\n"
    }
    // console.log(data)
		this.game.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV)

    this.map = this.game.add.tilemap('dynamicMap', this.tileSize, this.tileSize)
    this.map.addTilesetImage('grass', 'grass', this.tileSize, this.tileSize)

    this.layer1 = this.map.createLayer(0)
    this.layer1.resizeWorld()
		this.currentLayer = this.layer1

		this.game.input.addMoveCallback(this.updateMarker, this)
		this.game.input.onDown.add(this.onTileClick, this)
	}

	update(props) {
		// this.playerCharGroup.forEach(
		// 	function(player){
		// 		player.update()
		// 	},
		// 	this
		// )
	}

	placeTerrain(props) {
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

	placeCreatures(props) {
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

	placePlayers(props) {
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


	updateMatrix() {
		
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
	






	updateMarker() {
	    // this.marker.x = this.currentLayer.getTileX(this.game.input.activePointer.worldX) * this.tileSize
	    // this.marker.y = this.currentLayer.getTileY(this.game.input.activePointer.worldY) * this.tileSize
		
			this.marker.moveTo({
					x: this.currentLayer.getTileX(this.game.input.activePointer.worldX) * this.tileSize,
					y: this.currentLayer.getTileY(this.game.input.activePointer.worldY) * this.tileSize
			})
		
	}

	getTileObjects(props) {
		let result = []
		if (this.mapMatrixHash && this.mapMatrixHash[props.x] && this.mapMatrixHash[props.x][props.y]) result = this.mapMatrixHash[props.x][props.y]
		return result			
	}

	onTileClick() {
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
	
}
