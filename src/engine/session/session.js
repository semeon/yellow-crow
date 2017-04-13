import {logger} from 'logger'

export class GameSession {

	constructor(props) {
		this.active = false
		this.world = props.world
		this.engine = props.engine
		this.master = props.gm
	}
	
	start(){
		console.log("Starting new game session..")
		
		let location = {}
		location.actors = []
		location.actors.push(this.world.objectHash["char1"])
		location.actors.push(this.world.objectHash["char2"])
		
		this.master.init({location: location})
		this.master.startGame()
	}

	customFlow(props) {
		this.world.objectHash["char1"].attack({target: this.world.objectHash["char2"]})
	}





}
