import {logger} from 'logger'
import {engine} from 'engine'

export class GameObject {

	constructor(props) {
		this.id = props.id
		this.name = props.name

		this.hp = props.hp
		this.hpMax = props.hpMax
	}

	getName() {
		return this.name
	}

	getHp() {
		return this.hp
	}

	getHpMax() {
		return this.hpMax
	}

  increaseHP(props) {
    if ( (this.hp + props.d) >= this.hpMax ) {
      this.hp = this.hpMax
    } else {
      this.hp += props.propsd
    }
  }

  takeDamage(props) {
    if ( (this.hp - props.damage) <= 0 ) {
      this.hp = 0
    } else {
      this.hp -= props.damage
    }
  }

}