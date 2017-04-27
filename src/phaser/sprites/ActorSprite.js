import Phaser from 'phaser'
import MapObject from './MapObjectSprite'

export default class Actor extends MapObject {
  constructor (props) {
    super({game: props.game, 
					x: props.x, 
					y: props.y, 
					asset: props.asset, 
					gameObj: props.gameObj})
		this.higlightColor = 0xdd0000
  }

}
