import {logger} from 'logger'
import {generator} from 'generator'
// import {Actor} from './actor/actor.js'
// import {Terrain} from './items/terrainObject.js'


export class GameWorld {

	constructor(props) {
		this.players = []
		this.playersHash = {}
		this.currentLocation
		this.selectedPlayer
	}
	
	init(props) {
		let pcGroove = generator.generateActor({name: "Groove", 	assetId: "droid"})
		this.players.push(pcGroove)
		this.playersHash[pcGroove.id] = pcGroove

		let pcMonkeyWrench = generator.generateActor({name: "Monkey Wrench", 	assetId: "droid"})
		this.players.push(pcMonkeyWrench)

		this.selectedPlayer = this.players[0]	

		this.currentLocation = generator.generateLocation()
		console.log("Game World created.")
	}

	getCurrentLocation(props) {
		return this.currentLocation
	}

	getPlayers(props) {
		return this.players
	}	
	
	printWorld() {
		console.dir(this.currentLocation)
	}
	
}