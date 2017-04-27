import {logger} from 'logger'
import {engine} from './engine/engine.js'
import {GameUniverse} from './universe/universe.js'

class App {
  constructor(props) {
		this.ge = engine
		this.universe = new GameUniverse()
		this.universe.init()
		console.log("App initialized.")
  }	
	
	start(props) {
		this.universe.printWorld()
		this.ge.newSession({universe: this.universe})
	}

	getUniverse(props) {
		return this.universe
	}

	getCurrentLocation(props) {
		return this.universe.getCurrentLocation()
	}

	getPlayers(props) {
		return this.universe.getPlayers()
	}	
	
}

export let app = new App()