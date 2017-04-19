import {logger} from 'logger'
import {generator} from 'generator'
// import {Actor} from './actor/actor.js'
// import {Terrain} from './items/terrainObject.js'


export class GameWorld {

	constructor(props) {

		this.currentLocation = {
			width: 24,
			height: 16
		}
		this.currentLocation.objectMap = []

		console.log("Game World created.")
		
	}

	getCurrentLocation(props) {
		return this.currentLocation
	}
	
	addObject(props){
		this.currentLocation.objectHash[props.obj.id] = props.obj
		this.currentLocation.objectList.push(props.obj)
	}

	printWorld() {
		console.dir(this.currentLocation)
	}

	customPreload() {

		let char1 = generator.generateActor({
			id: "char1", 
			name: "Groove", 
			assetId: "droid"
		})

		let char2 = generator.generateActor({
			id: "char2", 
			name: "Nutty Dread",
			assetId: "droid"
		})

		let bush1 = generator.generateTerrainObject({
			id: "bush1", 
			name: "Bush",
			assetId: "desert_bush_01",
			hp: 10
		})

		let bush2 = generator.generateActor({
			id: "bush2", 
			name: "Bush",
			assetId: "desert_bush_01",
			hp: 10
		})

		let bush3 = generator.generateActor({
			id: "bush3", 
			name: "Bush",
			assetId: "desert_bush_01",
			hp: 10
		})

		let rock1 = generator.generateActor({
			id: "rock1", 
			name: "Rock",
			assetId: "desert_rock",
			hp: 1000
		})


		let item1 = {	object: char1, x: 1,	y: 1}
		let item2 = {	object: char2, x: 1,	y: 3}
		let item3 = {	object: bush1, x: 3,	y: 1}
		let item4 = {	object: bush2, x: 3,	y: 2}
		let item5 = {	object: bush3, x: 5,	y: 10}
		let item6 = {	object: rock1, x: 18,	y: 12}

		this.currentLocation.objectMap.push(item1)
		this.currentLocation.objectMap.push(item2)
		this.currentLocation.objectMap.push(item3)
		this.currentLocation.objectMap.push(item4)
		this.currentLocation.objectMap.push(item5)
		this.currentLocation.objectMap.push(item6)

	}
	
	
	
	
}