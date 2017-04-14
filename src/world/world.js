import {logger} from 'logger'
import {generator} from 'generator'
import {Actor} from './actor/actor.js'

export class GameWorld {

	constructor(props) {

		this.currentLocation = {}
		this.currentLocation.objectHash = {}
		this.currentLocation.objectList = []

		console.log("Game World created.")
		
	}

	getCurrentLocation(props) {
		return this.currentLocation
	}
	
	addObject(props){
		this.currentLocation.objectHash[props.obj.id] = props.obj
		this.currentLocation.objectList.push(props.obj)
	}

	printWorld() {
		console.dir(this.currentLocation)
	}

	customPreload() {

		let char1 = generator.generateActor({id: "char1", name: "Groove"})
		let char2 = generator.generateActor({id: "char2", name: "Nutty Dread"})

		this.addObject({obj: char1})
		this.addObject({obj: char2})
	} 	

}