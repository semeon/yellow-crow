import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset, actorObj }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
		this.actorObject = actorObj
  }

  update () {
    // this.x += 1
  }
}
