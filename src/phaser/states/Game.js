/* globals __DEV__ */
import {app} from 'app'

export default class extends Phaser.State {
  init () {}

  static get size() {
    return 36;
  }

  preload () {

  }

  create () {


    // Create a group for our tiles.
    this.game.isoGroup = this.game.add.group()

    // Let's make a load of tiles on a grid.
    // this.spawnTiles()

    // Provide a 3D position for the cursor
    // this.cursorPos = new Phaser.Plugin.Isometric.Point3()

		this.game.locationMap.init()
  }

	update () {
    // Update the cursor position.
    // It's important to understand that screen-to-isometric projection means you have to specify a z position manually, as this cannot be easily
    // determined from the 2D pointer position without extra trickery. By default, the z position is 0 if not set.
    this.game.iso.unproject(this.game.input.activePointer.position, this.cursorPos);

		// let self = this
		//
		//     // Loop through all tiles and test to see if the 3D position from above intersects with the automatically generated IsoSprite tile bounds.
		//     self.game.isoGroup.forEach(function (tile) {
		//         var inBounds = tile.isoBounds.containsXY(self.cursorPos.x, self.cursorPos.y);
		//         // If it does, do a little animation and tint change.
		//         if (!tile.selected && inBounds) {
		//             tile.selected = true;
		//             tile.tint = 0x86bfda;
		//             self.game.add.tween(tile).to({ isoZ: 4 }, 200, Phaser.Easing.Quadratic.InOut, true);
		//         }
		//         // If not, revert back to how it was.
		//         else if (tile.selected && !inBounds) {
		//             tile.selected = false;
		//             tile.tint = 0xffffff;
		//             self.game.add.tween(tile).to({ isoZ: 0 }, 200, Phaser.Easing.Quadratic.InOut, true);
		//         }
		//     });
		this.game.locationMap.update()
	}

  render () {
    if (__DEV__) {

    }
  }
	
  spawnTiles () {

      var tile;
      for (var xx = 0; xx < 356; xx += 38) {
          for (var yy = 0; yy < 356; yy += 38) {
              // Create a tile using the new game.add.isoSprite factory method at the specified position.
              // The last parameter is the group you want to add it to (just like game.add.sprite)
              tile = this.game.add.isoSprite(xx, yy, 0, 'tile', 0, this.game.isoGroup);
              tile.anchor.set(0.5, 0);
          }
      }
  }

}
