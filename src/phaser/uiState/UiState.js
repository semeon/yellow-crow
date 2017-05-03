export default class UiState {
  constructor (props) {
		this.selectedActor
		this.selectedActorSprite

		this.selectedTarget
		this.selectedTargetSprite
		
  }

	setSelectedActor(props) {
		this.selectedActor = props.actor
		this.selectedActorSprite = props.sprite

	}
	setSelectedTarget(props) {
		this.selectedTarget = props.target
		this.selectedTargetSprite = props.sprite
	}

	resetSelectedTarget(props) {
		this.selectedTarget = null
		this.selectedTargetSprite = null
	}


	getSelectedActor(props) {
		return this.selectedActor
	}
	getSelectedActorSprite(props) {
		return this.selectedActorSprite
	}


	getSelectedTarget(props) {
		return this.selectedTarget
	}
	getSelectedTargetSprite(props) {
		return this.selectedTargetSprite
	}


	isSelectedActor(props) {
		let result = false
		if(props && this.selectedActor && props.actor.id == this.selectedActor.id) result = true
			
		return result
	}

	isSelectedTarget(props) {
		let result = false
		if(props && this.selectedTarget && props.target.id == this.selectedTarget.id) result = true
		return result
	}

}
