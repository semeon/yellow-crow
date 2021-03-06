import {app} from 'app'
import 'pixi'
import 'p2'
import 'phaserIso'

// import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'

import config from './config'

import LocationMap from './map/LocationMap'
import Board from './board/TileBoard'

import UiState from './uiState/UiState'

export default class PhaserUI extends Phaser.Game {
  constructor (props) {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

		let locationData = app.getCurrentLocation()
		let playerData = app.getPlayers()
		
		this.gm = app.getGM()
		this.uiState = new UiState()

		this.locationMap = new Board({game: this,
														data: locationData,
														width: locationData.width,
														height: locationData.height,
														playerData: playerData})


  }
	
	init() {
    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Game', GameState, false)
	}
	
	start() {
    this.state.start('Boot')
	}
}