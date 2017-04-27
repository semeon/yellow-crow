/* globals __DEV__ */
import {app} from 'app'
import Phaser from 'phaser'



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
