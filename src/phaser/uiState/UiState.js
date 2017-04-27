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


}
