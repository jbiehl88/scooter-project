class User {
	constructor(username, password, age) {
		this.username = username
		this.password = password
		this.age = age
		this.loggedIn = false
	}

	login(password) {
		if (this.password == password) {
			this.loggedIn = true
			// console.log(this.loggedIn)
			// console.log(`${this.username} is logged in!`)
		} else {
			throw new Error("Username or password is incorrect")
		}
	}

	logout() {
		if (this.loggedIn == true) {
			this.loggedIn = false
			// console.log(this.loggedIn)
			// console.log(`${this.username} has been successfully logged out`)
		} else {
			throw new Error("no such user is logged in")
		}
	}
}

module.exports = User
