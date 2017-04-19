import {dice} from 'dice'
import {Actor} from '../world/actor/actor.js'
import {TerrainObject} from '../world/items/terrainObject.js'

export class Generator {

  constructor(props) {
  }

	generateTerrainObject(props) {
		let object = new TerrainObject({id: props.id, name: props.name, hpMax: props.hp, assetId: props.assetId})
		
		return object
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
		
		let char = new Actor({id: props.id, name: props.name, special: special, assetId: props.assetId})
		
		// char.print({special: true, health: true, attack: true, defense: true})
		
		return char
	}

}

export let generator = new Generator();