import Phaser from 'phaser'
import MapObject from './MapObjectSprite'
import SpriteHighlighter from './SpriteHighlighter'


export default class TerrainObject extends MapObject {
  constructor (props) {
    super(props)
		this.higlightColor = 0xdd0000
  }


	onLMBClick(props) {
			this.higlighter.toggleHighlights()
	}
	
}
