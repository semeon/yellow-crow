class Logger {

  constructor(props) {
    this.feed = []
		this.toConsole = true
		console.log("A Logger instance created.")
  }

  log(props) {
    this.feed.push(props.m)
		if (this.toConsole) {
			console.log("LOG: " + props.m)
		}
  }

}


export let logger = new Logger()