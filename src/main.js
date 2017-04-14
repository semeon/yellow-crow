import {app} from 'app'
import {dice} from 'dice'
import {logger} from 'logger'

import Game from './phaser/phaserMain'



app.start()
// logger.log({m: "> Test dice D20: " + dice.rollD20().value})

let game = new Game()
