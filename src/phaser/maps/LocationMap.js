// EXAMPLE: https://phaser.io/examples/v2/tilemaps/blank-tilemap

import Phaser from 'phaser'
import {logger} from 'logger'
import GameObject from '../sprites/GameObjectSprite'

export default class LocationMap {

	constructor(props) {
		this.game = props.game

		this.locationData = props.data

		this.tileSize = props.tile
		this.width = props.data.width
		this.height = props.data.height
		
		this.map
		this.layer1

		this.marker
		this.currentLayer
	}
	
	preload(props) {
		this.game.load.image('grass', './assets/images/ground_4_32x32.png')
    this.game.load.image('droid', 'assets/images/droid_32x32.png')
    this.game.load.image('desert_sand', 'assets/images/desert/desert_sand_32x32.png')	
    this.game.load.image('desert_bush_01', 'assets/images/desert/desert_bush_01.png')	
    this.game.load.image('desert_bush_02', 'assets/images/desert/desert_bush_02.png')	
    this.game.load.image('desert_rock', 'assets/images/desert/desert_rock.png')	
	}
	
	init(props) {

    let data = ""
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++)  {
        data += this.game.rnd.between(0, 3).toString()
        if (x < this.width-1) data += ','
      }
      if (y < this.height-1)  data += "\n"
    }
    console.log(data)
		this.game.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV)

    this.map = this.game.add.tilemap('dynamicMap', this.tileSize, this.tileSize)
    this.map.addTilesetImage('grass', 'grass', this.tileSize, this.tileSize)

    this.layer1 = this.map.createLayer(0)
    this.layer1.resizeWorld()
		this.currentLayer = this.layer1

		this.game.input.addMoveCallback(this.updateMarker, this)
		this.game.input.onDown.add(this.onTileClick, this)


    this.marker = this.game.add.graphics()
    this.marker.lineStyle(1, 0x000000, 1)
    this.marker.drawRect(0, 0, this.tileSize, this.tileSize)
		
		this.placeObjects()

	}

	placeObjects(props) {

		console.log("========================")

		for (let i=0; i<this.locationData.objectMap.length; i++) {
			let dataObj = this.locationData.objectMap[i]

			console.log("  dataObj: ")
			console.dir(dataObj)


			let sprite  = new GameObject({
	      game: this.game,
	      x: dataObj.x * this.tileSize,
	      y: dataObj.y * this.tileSize,
	      asset: dataObj.object.assetId,
				gameObj: dataObj.object
	    })				
			sprite.init()
	    this.game.add.existing(sprite)
		}
 		
	}

	
	updateMarker() {
	    this.marker.x = this.currentLayer.getTileX(this.game.input.activePointer.worldX) * this.tileSize
	    this.marker.y = this.currentLayer.getTileY(this.game.input.activePointer.worldY) * this.tileSize
	}

	onTileClick() {
		console.log("----- Tile click: " + this.currentLayer.getTileX(this.game.input.activePointer.worldX) + ":" + this.currentLayer.getTileY(this.game.input.activePointer.worldY))
	}
	
}
