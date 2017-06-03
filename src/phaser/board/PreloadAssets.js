export function preload(props) {

  this.game.load.image('tile', './assets/images/3d/tile.png');

	this.game.load.image('grass', 'assets/images/ground_4_32x32.png')
  this.game.load.image('droid', 'assets/images/droid_32x32.png')

  this.game.load.image('marker_move', 'assets/images/markers/marker_01.png')
  this.game.load.image('marker_move_info', 'assets/images/markers/marker_01_info.png')
	
  this.game.load.image('desert_sand', 'assets/images/desert/desert_sand_32x32.png')	
  this.game.load.image('desert_bush_01', 'assets/images/desert/desert_bush_01.png')	
  this.game.load.image('desert_bush_02', 'assets/images/desert/desert_bush_02.png')	
  this.game.load.image('desert_rock', 'assets/images/desert/desert_rock.png')	
}