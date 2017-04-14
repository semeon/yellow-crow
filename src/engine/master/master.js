import {logger} from 'logger'

export class GameMaster {

	constructor(props) {
		this.actions = props.actions
		this.location = {}
		this.actors = []		
	}
	
	init(props) {
		this.location = props.location
		this.actors = props.location.objectList
	}
	
	startGame(props){
		this.customFlow1()
	}


	customFlow1(props) {
		
		for (let i=0; i<2; i++) {
			this.actions.attack({actor: this.actors[0], target: this.actors[1]})
			this.actions.attack({actor: this.actors[1], target: this.actors[0]})
		}

	}
}
