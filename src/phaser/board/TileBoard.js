// EXAMPLE: https://phaser.io/examples/v2/tilemaps/blank-tilemap

import Phaser from 'phaser'
import {logger} from 'logger'

import Marker from '../marker/Marker'
import Path from '../path/Path'

const TILE_WIDTH = 32
const TILE_HEIGHT = 32

export default class TileBoard {

	constructor(props) {
		this.game = props.game

		this.locationData = props.data
		this.playerData = props.playerData

		this.tileSize = TILE_WIDTH
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

		this.marker
		this.path
	}

	
	init(props) {
		this.mapTerrainGroup = this.game.add.group()
		this.mapCreaturesGroup = this.game.add.group()
		this.mapItemsGroup = this.game.add.group()
		this.playerCharGroup = this.game.add.group()
		this.allObstacles = this.game.add.group()
		
		this.marker = new Marker({game: this.game, board: this})
		this.path = new Path({game: this.game, tileSize: this.tileSize})
		this.initTileMap()
		
		this.placeTerrain()
		this.placeCreatures()
		this.placePlayers()
		this.updateMatrix()

		this.game.world.bringToTop(this.allObstacles)

		this.marker.init()
		this.path.init({map: this, matrix: this.mapMatrix}) 
	}

	initTileMap(props) {
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

		this.game.input.addMoveCallback(function() { this.marker.update() }, this)
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

	
}

// Assets
import {preload} from './PreloadAssets.js'
TileBoard.prototype.preload = preload

// Fill the board
import {placeTerrain} from './FillBoard.js'
import {placeCreatures} from './FillBoard.js'
import {placePlayers} from './FillBoard.js'

TileBoard.prototype.placeTerrain = placeTerrain
TileBoard.prototype.placeCreatures = placeCreatures
TileBoard.prototype.placePlayers = placePlayers

// Click Handler
import {onTileClick} from './ClickHandler.js'
TileBoard.prototype.onTileClick = onTileClick

// Object Matrix
import {updateMatrix} from './BoardMatrix.js'
import {getTileObjects} from './BoardMatrix.js'

TileBoard.prototype.updateMatrix = updateMatrix
TileBoard.prototype.getTileObjects = getTileObjects


