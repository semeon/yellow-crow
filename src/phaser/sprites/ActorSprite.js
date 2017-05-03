import Phaser from 'phaser'
import MapObject from './MapObjectSprite'

export default class Actor extends MapObject {
  constructor (props) {
		if(!props.higlightColor) props.higlightColor =  0xffff00
    super(props)
  }

}
