import Phaser from 'phaser'
import MapObject from './MapObjectSprite'
import SpriteHighlighter from './SpriteHighlighter'


export default class TileObject extends MapObject {
  constructor (props) {
		if(!props.higlightColor) props.higlightColor =  0x0000dd
    super(props)
			
    this.sprite.anchor.set(0.5, 0)
  }


	
}
