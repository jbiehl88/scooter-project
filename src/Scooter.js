class Scooter {
	static nextSerial = 1
	constructor(station) {
		this.station = station
		this.user = null
		this.serial = Scooter.nextSerial
		this.charge = 100
		this.isBroken = false

		Scooter.nextSerial += 1
	}
	rent(user) {
		if (this.charge > 20 && this.isBroken != true) {
			this.user = user
			this.station = null
		} else {
			throw new Error("scooter needs to charge or scooter needs repair")
		}
	}

	dock(station) {
		if (this.station == null) {
			this.station = station
			this.user = null
		}
	}

	//recharge was set to increment by 10 since setting at 1 took a long time
	// but setting at 1 was still completing the test
	async recharge() {
		while (this.station !== null && this.charge < 100) {
			await new Promise((resolve) => setTimeout(resolve, 1000))
			this.charge += 10
			console.log(`Scooter is at ${this.charge}% charge!`)
		}
		console.log("Charging is complete or no longer at station")
	}

	async requestRepair() {
		if (this.isBroken == true) {
			await new Promise((resolve) => setTimeout(resolve, 5000))
			this.isBroken = false
			console.log(`repair completed`)
		}
	}

	// ******* methods before trying to design a test *******

	// recharge() {
	// 	const timer = setInterval(() => {
	// 		if (this.station != null && this.charge != 100) {
	// 			this.charge += 1
	// 			console.log(`Scooter is at ${this.charge}% charge!`)
	// 		} else {
	// 			clearInterval(timer)
	// 			console.log("Charging is complete or no longer at station")
	// 		}
	// 	}, 1000)
	// }

	// requestRepair() {
	// 	const timer = setInterval(() => {
	// 		if (this.isBroken == true) {
	// 			this.isBroken = false
	// 		} else {
	// 			clearInterval(timer)
	// 			console.log(`repair completed`)
	// 		}
	// 	}, 2500)
	// }
}

module.exports = Scooter
