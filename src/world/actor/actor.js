import {dice} from 'dice'
import {logger} from 'logger'
import {GameObject} from '../_prototype/gameObject.js'


export class Actor extends GameObject {

	constructor(props) {
  	super(props)

		this.special = props.special
		
		this.hpMax = props.special.E * 10
		this.hp = this.hpMax
		
	}
	
  isAlive() {
    return this.hp>0
  }
}


// SPECIAL
import {Special} from './special.js'
Actor.prototype.getSpecial = Special.getSpecial


// Combat actions
import {CombatActions} from './combatActions.js'
Actor.prototype.attackThrow = CombatActions.attackThrow
Actor.prototype.dodgeThrow = CombatActions.dodgeThrow
Actor.prototype.receiveAttack = CombatActions.receiveAttack


// Debug
import {print} from './print.js'
Actor.prototype.print = print
