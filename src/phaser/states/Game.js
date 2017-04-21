/* globals __DEV__ */
import {app} from 'app'
import Phaser from 'phaser'

import Mushroom from '../sprites/Mushroom'
import Actor from '../sprites/ActorSprite'
import GameObject from '../sprites/GameObjectSprite'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {

		this.game.locationMap.init()

  }

  render () {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }


}
