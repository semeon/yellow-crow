export default class UiState {
  constructor (props) {
		this.selectedActor
		this.selectedTarget
  }

	setSelectedActor(props) {
		this.selectedActor = props.actor
	}

	setSelectedTarget(props) {
		this.selectedTarget = props.target
	}

	getSelectedActor(props) {
		return this.selectedActor
	}

	getSelectedTarget(props) {
		return this.selectedTarget
	}

	isSelectedActor(props) {
		let result = false
		if(props && props.actor.id == this.selectedActor.id) result = true
			
		return result
	}

	isSelectedTarget(props) {
		let result = false
		if(props && props.target.id == this.selectedTarget.id) result = true
			
		return result
	}

}
