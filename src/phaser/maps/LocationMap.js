// EXAMPLE: https://phaser.io/examples/v2/tilemaps/blank-tilemap

import Phaser from 'phaser'
import {logger} from 'logger'
import Marker from '../marker/Marker'
import Actor from '../sprites/ActorSprite'
import Player from '../sprites/PlayerSprite'
import GameObject from '../sprites/GameObjectSprite'

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
		this.playerCharGroup
		this.layer1

		this.marker = new Marker({game: props.game})
		this.currentLayer
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
		this.mapObjectsGroup = this.game.add.group()
		this.playerCharGroup = this.game.add.group()
		
		this.initMap()
		
		this.placeObjects()
		this.placePlayers()
		
		this.game.world.bringToTop(this.mapObjectsGroup)
		this.game.world.bringToTop(this.playerCharGroup)
    this.initMarker()
	}

	placeObjects(props) {
		for (let i=0; i<this.locationData.allObjects.length; i++) {
			let mapObj = this.locationData.allObjects[i]

			let sprite  = new GameObject({
	      game: this.game,
	      x: mapObj.x * this.tileSize,
	      y: mapObj.y * this.tileSize,
	      asset: mapObj.object.assetId,
				gameObj: mapObj.object
	    })				
			sprite.init()
	    this.game.add.existing(sprite)
			this.mapObjectsGroup.add(sprite)
		}
	}

	placePlayers(props) {
		for (let i=0; i<this.playerData.length; i++) {
			let pc = this.playerData[i]

			let sprite  = new Player({
	      game: this.game,
	      x: 1 * this.tileSize,
	      y: (3 + i*2) * this.tileSize,
	      asset: pc.assetId,
				gameObj: pc
	    })				
			sprite.init()
	    this.game.add.existing(sprite)
			this.mapObjectsGroup.add(sprite)
	    this.game.add.existing(sprite)
			this.playerCharGroup.add(sprite)
		}


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


	initMarker(props) {
    // this.marker = this.game.add.graphics()
    // this.marker.lineStyle(1, 0x000000, 1)
    // this.marker.drawRect(0, 0, this.tileSize, this.tileSize)

    // this.marker = this.game.add.graphics()
    // this.marker.lineStyle(1, 0x000000, 1)
    // this.marker.drawRoundedRect(0, 0, this.tileSize, this.tileSize, 5)

		// let tileMarker = this.game.add.sprite(0, 0, 'marker_tile')
		// this.marker = this.game.add.group(tileMarker)

		this.marker.init()

	}
	
	updateMarker() {
	    // this.marker.x = this.currentLayer.getTileX(this.game.input.activePointer.worldX) * this.tileSize
	    // this.marker.y = this.currentLayer.getTileY(this.game.input.activePointer.worldY) * this.tileSize
		
			this.marker.moveTo({
					x: this.currentLayer.getTileX(this.game.input.activePointer.worldX) * this.tileSize,
					y: this.currentLayer.getTileY(this.game.input.activePointer.worldY) * this.tileSize
			})
		
	}

	onTileClick() {
		console.log("----- Tile click: " + this.currentLayer.getTileX(this.game.input.activePointer.worldX) + ":" + this.currentLayer.getTileY(this.game.input.activePointer.worldY))
	}
	
}
