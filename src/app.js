import {logger} from 'logger'
import {engine} from './engine/engine.js'
import {GameWorld} from './world/world.js'

class App {
  constructor(props) {
		this.ge = engine
		this.world = new GameWorld()
		this.world.init()
		console.log("App initialized.")
  }	
	
	start(props) {
		this.world.printWorld()
		this.ge.newSession({world: this.world})
	}

	getWorld(props) {
		return this.world
	}

	getCurrentLocation(props) {
		return this.world.getCurrentLocation()
	}

	getPlayers(props) {
		return this.world.getPlayers()
	}	
	
}

export let app = new App()