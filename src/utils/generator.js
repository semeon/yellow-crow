import {dice} from 'dice'
import {Actor} from '../world/actor/actor.js'


export class Generator {

  constructor(props) {
  }

	generateActor(props) {
		let special = {}

		special.S = dice.rollD10().value
		special.P = dice.rollD10().value
		special.E = dice.rollD10().value
		special.C = dice.rollD10().value
		special.I = dice.rollD10().value
		special.A = dice.rollD10().value
		special.L = dice.rollD10().value
		
		let hp = dice.rollD10(10).value
		
		let char = new Actor({id: props.id, name: props.name, special: special, hp: hp, hpMax: hp})
		char.print({special: true, health: true})
		return char
	}

}

export let generator = new Generator();