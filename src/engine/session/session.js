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
		let location = this.world.getCurrentLocation()
		this.master.init({location: location})
		this.master.startGame()
	}

}
