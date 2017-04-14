// EXAMPLE: https://phaser.io/examples/v2/tilemaps/blank-tilemap

import {logger} from 'logger'

export class LocationMap {

	constructor(props) {
		

		console.log("=============")
				
				
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
	
	
	init(props) {
		this.map = this.game.add.tilemap()
    this.layer1 = this.map.create('level1', 40, 30, 32, 32);
	}
	
}
