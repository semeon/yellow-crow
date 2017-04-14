import {app} from 'app'
import {dice} from 'dice'
import {logger} from 'logger'

import PhaserUI from './phaser/phaserMain'



app.start()
// logger.log({m: "> Test dice D20: " + dice.rollD20().value})

let game = new PhaserUI({location: app.getCurrentLocation()})
