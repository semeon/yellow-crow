import {logger} from 'logger'
import {generator} from 'generator'



export class GameUniverse {

	constructor(props) {
		this.players = []
		this.playersHash = {}
		this.currentLocation
	}
	
	init(props) {
		let pcGroove = generator.generateActor({name: "Groove", control: "player",	assetId: "droid"})
		this.players.push(pcGroove)
		this.playersHash[pcGroove.id] = pcGroove

		let pcMonkeyWrench = generator.generateActor({name: "Monkey Wrench", control: "player",	assetId: "droid"})
		this.players.push(pcMonkeyWrench)

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