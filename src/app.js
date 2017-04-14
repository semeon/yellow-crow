import {logger} from 'logger'
import {engine} from './engine/engine.js'
import {GameWorld} from './world/world.js'

class App {
  constructor(props) {
		this.ge = engine
		this.world = new GameWorld()
		console.log("App initialized.")
  }	
	
	start(props) {
		this.world.customPreload()
		this.world.printWorld()
		this.ge.newSession({world: this.world})
	}

	getCurrentLocation(props) {
		return this.world.getCurrentLocation()
	}
	
}

export let app = new App()