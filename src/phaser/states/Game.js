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

		// let data = this.game.locationMap.locationData
		//
		// for (let i=0; i< data.objectMap.length; i++) {
		// 	let dataObj = data.objectMap[i]
		//
		// 	console.log("  dataObj: ")
		// 	console.dir(dataObj)
		//
		//
		// 	let sprite  = new GameObject({
		// 	      game: this,
		// 	      x: dataObj.x,
		// 	      y: dataObj.y,
		// 	      asset: dataObj.object.assetId,
		// 		actorObj: dataObj.object
		// 	    })
		// 	sprite.init()
		// 	    this.game.add.existing(sprite)
		// }

		//     this.actor1 = new Actor({
		//       game: this,
		//       x: 17,
		//       y: 16,
		//       asset: 'droid',
		// 	actorObj: app.getCurrentLocation().objectList[0]
		//     })
		//
		// this.actor1.init()
		//
		//
		//     // this.game.add.existing(this.mushroom)
		//     this.game.add.existing(this.actor1)
  }

  render () {
    if (__DEV__) {
      // this.game.debug.spriteInfo(this.mushroom, 32, 32)
    }
  }


}
