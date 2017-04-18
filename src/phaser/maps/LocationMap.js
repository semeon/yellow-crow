// EXAMPLE: https://phaser.io/examples/v2/tilemaps/blank-tilemap

import {logger} from 'logger'

export default class LocationMap {

	constructor(props) {
		this.game = props.game

		this.map
		this.layer1
		this.layer2
		this.layer3

		this.marker
		this.currentTile = 0
		this.currentLayer

		this.cursors
	}
	
	preload(props) {
		this.game.load.image('ground_1x1', './assets/images/ground_1x1.png')
		this.game.load.image('grass', './assets/images/ground-32x32.png')
		this.game.load.image('numbered', './assets/images/10-32x32.png')
    this.game.load.image('droid', 'assets/images/droid_32x32.png')		
	}
	
	init(props) {

    let data = ""
    for (var y = 0; y < 16; y++) {
      for (var x = 0; x < 24; x++)  {
        data += this.game.rnd.between(0, 0).toString()
        if (x < 23) data += ','
      }
      if (y < 15)  data += "\n"
    }
    console.log(data)
		this.game.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV)

    this.map = this.game.add.tilemap('dynamicMap', 32, 32)
    this.map.addTilesetImage('grass', 'grass', 32, 32)

		// this.layer1 = this.map.create('level1', 40, 30, 32, 32)

    this.layer1 = this.map.createLayer(0)
    this.layer1.resizeWorld()
		this.currentLayer = this.layer1
		this.game.input.addMoveCallback(this.updateMarker, this)
    this.marker = this.game.add.graphics()
    this.marker.lineStyle(1, 0x000000, 1)
    this.marker.drawRect(1, 1, 31, 31)

	}
	
	updateMarker() {
	    this.marker.x = this.currentLayer.getTileX(this.game.input.activePointer.worldX) * 32;
	    this.marker.y = this.currentLayer.getTileY(this.game.input.activePointer.worldY) * 32;
	}
	
	
}
