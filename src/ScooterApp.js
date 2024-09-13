const User = require("./User")
const Scooter = require("./Scooter")

class ScooterApp {
	constructor() {
		this.stations = { station1: [], station2: [], station3: [] }
		this.registeredUsers = {}
	}

	registerUser(username, password, age) {
		const user1 = new User(username, password, age)
		let obj = this.registeredUsers
		if (obj.length == undefined && age >= 18) {
			obj[username] = user1
			console.log("user has been registered")
			return user1
		} else if (obj.length !== undefined) {
			for (let i in obj) {
				if (username != i && age >= 18) {
					obj[username] = user1
					console.log("user has been registered")
					return i
				} else {
					throw new Error("already registered or too young to register")
				}
			}
		} else {
			throw new Error("already registered or too young to register")
		}
	}

	loginUser(username, password) {
		let obj = this.registeredUsers
		for (let i in obj) {
			if (username == i) {
				obj[i].login(password)
				console.log("user has been logged in")
				return
			}
		}
		throw new Error("Username or password is incorrect")
	}

	logoutUser(username) {
		let obj = this.registeredUsers
		for (let i in obj) {
			if (username == i) {
				obj[i].logout()
				console.log("user is logged out")
				return
			}
		}
		throw new Error("no such user is logged in")
	}

	createScooter(station) {
		const scooter1 = new Scooter(station)
		let obj = this.stations
		for (let i in obj) {
			if (i == station) {
				obj[station].push(scooter1)
				console.log(obj[station])
				console.log("created new scooter")
				return
			}
		}
		throw new Error("no such station error")
	}

	dockScooter(scooter, station) {
		let arrStation = this.stations[station]
		if (arrStation == undefined) {
			throw new Error("no such station")
		}
		for (let j in arrStation) {
			if (arrStation[j].serial == scooter.serial) {
				throw new Error("scooter already at station")
			}
		}
		scooter.dock(station)
		console.log(`Scooter #${scooter.serial} is docked`)
		arrStation.push(scooter)
		return
	}

	rentScooter(scooter, user) {
		for (let i in this.stations) {
			let indexStation = this.stations[i]
			for (let j in indexStation) {
				if (indexStation[j].serial == scooter.serial) {
					indexStation[j].rent(user)
					indexStation.splice(i, 1)
					console.log("scooter is rented")
					return
				} else {
					throw new Error("scooter is already rented")
				}
			}
		}
	}

	print() {
		for (let u in this.registeredUsers) {
			console.log(this.registeredUsers[u])
		}
		console.log(Object.keys(this.stations))
		console.log(`Station1: ${this.stations.station1.length}`)
		console.log(`Station2: ${this.stations.station2.length}`)
		console.log(`Station3: ${this.stations.station3.length}`)
	}
}

module.exports = ScooterApp
