/* globals __DEV__ */
import {app} from 'app'
import Phaser from 'phaser'

import {LocationMap} from '../maps/LocationMap'


import Mushroom from '../sprites/Mushroom'
import Actor from '../sprites/ActorSprite'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    let bannerText = 'Phaser + ES6 + Webpack'
    let banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)


		this.map = new LocationMap({game: this.game})
		this.map.init()

    this.mushroom = new Mushroom({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    })


    this.actor1 = new Actor({
      game: this,
      x: 50,
      y: 50,
      asset: 'mushroom',
			actorObj: app.getCurrentLocation().objectList[0]
    })

    this.game.add.existing(this.mushroom)
    this.game.add.existing(this.actor1)
  }

  render () {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }


}
