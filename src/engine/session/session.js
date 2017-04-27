import {logger} from 'logger'

export class GameSession {

	constructor(props) {
		this.active = false
		this.universe = props.universe
		this.engine = props.engine
		this.master = props.gm
	}
	
	start(){
		console.log("Starting new game session..")
		let location = this.universe.getCurrentLocation()
		this.master.init({location: location})
		this.master.startGame()
	}

}
