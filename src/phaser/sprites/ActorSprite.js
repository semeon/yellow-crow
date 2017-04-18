import Phaser from 'phaser'
import GameObject from './GameObjectSprite'

export default class Actor extends GameObject {
  constructor (props) {
    super({game: props.game, 
					x: props.x, 
					y: props.y, 
					asset: props.asset, 
					gameObj: props.actorObj})
  }

}
