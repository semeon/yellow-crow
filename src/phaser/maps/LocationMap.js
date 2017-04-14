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
		this.showLayersKey
		this.layer1Key
		this.layer2Key
		this.layer3Key
	}
	
	preload(props) {
		this.game.load.image('ground_1x1', './assets/images/ground_1x1.png')
		this.game.load.image('numbered', './assets/images/10-32x32.png')
	}
	
	init(props) {

    var data = '';
    for (var y = 0; y < 16; y++)
    {
        for (var x = 0; x < 16; x++)
        {
            data += this.game.rnd.between(0, 9).toString();
            if (x < 15) data += ','
        }
        if (y < 15)  data += "\n"
    }

    console.log(data);

    this.game.cache.addTilemap('dynamicMap', null, data, Phaser.Tilemap.CSV)
    this.game.map = this.game.add.tilemap('dynamicMap', 32, 32)
    this.game.map.addTilesetImage('numbered', 'numbered', 32, 32)

    this.layer1 = this.game.map.createLayer(0)
    this.layer1.resizeWorld()
    this.cursors = this.game.input.keyboard.createCursorKeys()

		this.currentLayer = this.layer1
		this.game.input.addMoveCallback(this.updateMarker, this)
    this.marker = this.game.add.graphics()
    this.marker.lineStyle(1, 0x000000, 1)
    this.marker.drawRect(1, 1, 31, 31)
		
		// this.game.stage.backgroundColor = '#2d2d2d'
		// this.map = this.game.add.tilemap()
		//     this.layer1 = this.map.create('level1', 40, 30, 32, 32)
		// this.layer1.resizeWorld()
		//
		//
		// this.createTileSelector()
		//
		//
		// this.cursors = this.game.input.keyboard.createCursorKeys()

		
	}

	// pickTile(sprite, pointer) {
	// 		console.log("****************")
	// 		console.dir(pointer.x)
	//     this.currentTile = this.game.math.snapToFloor(pointer.x, 32) / 32
	// 		console.log(this.currentTile)
	// }
	//
	// createTileSelector(props) {
	//
	//     //  Our tile selection window
	//     var tileSelector = this.game.add.group();
	//
	//     var tileSelectorBackground = this.game.make.graphics();
	//     tileSelectorBackground.beginFill(0x000000, 0.5);
	//     tileSelectorBackground.drawRect(0, 0, 800, 34);
	//     tileSelectorBackground.endFill();
	//
	//     tileSelector.add(tileSelectorBackground);
	//
	//     var tileStrip = tileSelector.create(1, 1, 'ground_1x1');
	//     tileStrip.inputEnabled = true;
	//     tileStrip.events.onInputDown.add(this.pickTile, this);
	//
	//     tileSelector.fixedToCamera = true;
	//
	//     //  Our painting marker
	//     this.marker = this.game.add.graphics()
	//     this.marker.lineStyle(2, 0x000000, 1)
	//     this.marker.drawRect(0, 0, 32, 32)
	//
	// }
	
	updateMarker() {

	    this.marker.x = this.currentLayer.getTileX(this.game.input.activePointer.worldX) * 32;
	    this.marker.y = this.currentLayer.getTileY(this.game.input.activePointer.worldY) * 32;

	    // if (this.game.input.mousePointer.isDown)
	    // {
	    //     this.map.putTile(this.currentTile, this.currentLayer.getTileX(this.marker.x), this.currentLayer.getTileY(this.marker.y), this.currentLayer);
	    //     // map.fill(currentTile, currentLayer.getTileX(marker.x), currentLayer.getTileY(marker.y), 4, 4, currentLayer);
	    // }

	}
	
	
}
