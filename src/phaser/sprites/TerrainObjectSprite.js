import Phaser from 'phaser'
import MapObject from './MapObjectSprite'
import SpriteHighlighter from './SpriteHighlighter'


export default class TerrainObject extends MapObject {
  constructor (props) {
		if(!props.higlightColor) props.higlightColor =  0x0000dd
    super(props)
  }


	onLMBClick(props) {
			this.higlighter.toggleHighlights()
	}
	
}
