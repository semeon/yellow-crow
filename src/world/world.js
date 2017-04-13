import {logger} from 'logger'
import {generator} from 'generator'
import {Actor} from './actor/actor.js'

export class GameWorld {

	constructor(props) {
		this.objectHash = {}
		this.objectList = []
		console.log("Game World created.")
	}

	
	addObject(props){
		this.objectHash[props.obj.id] = props.obj
		this.objectList.push(props.obj.id)
	}

	printWorld() {
		console.dir(this.objectHash)
	}

	customPreload() {

		let char1 = generator.generateActor({id: "char1", name: "Groove"})
		let char2 = generator.generateActor({id: "char2", name: "Nutty Dread"})

		this.addObject({obj: char1})
		this.addObject({obj: char2})
	} 	

}