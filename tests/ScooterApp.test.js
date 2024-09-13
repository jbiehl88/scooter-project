const User = require("../src/User")
const ScooterApp = require("../src/ScooterApp")
const Scooter = require("../src/Scooter")

const scooterApp = new ScooterApp()
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
	test("Should return instance of User", () => {
		const response = scooterApp.registerUser("Joe Bloggs", "test123", 21)
		expect(response).toBeInstanceOf(User)
	})

	it("registerUser() test", () => {
		const response = scooterApp.registerUser("JohnB", "123", 18)
		expect(scooterApp.registeredUsers["JohnB"]).toEqual(response)
	})
	it("registerUser() Error too young", () => {
		expect(() => {
			scooterApp.registerUser("JohnB", "123", 16).toThrow("already registered or too young to register")
		})
	})
	it("registerUser() Error already exists", () => {
		scooterApp.registerUser("JohnB", "123", 18)
		expect(() => {
			scooterApp.registerUser("JohnB", "123", 18).toThrow("already registered or too young to register")
		})
	})
})
describe("Login method tests", () => {
	it("login test", () => {
		scooterApp.registerUser("JohnB", "123", 18)
		const user = scooterApp.registeredUsers["JohnB"]
		scooterApp.loginUser(user.username, user.password)
		expect(user.loggedIn).toBe(true)
	})

	it("loginUser() password error", () => {
		scooterApp.registerUser("JohnB", "123", 18)
		const user = scooterApp.registeredUsers["JohnB"]
		expect(() => {
			scooterApp.loginUser(user.username, "testing").toThrow("Username or password is incorrect")
		})
	})

	it("loginUser() username error", () => {
		scooterApp.registerUser("JohnB", "123", 18)
		const user = scooterApp.registeredUsers["JohnB"]
		expect(() => {
			scooterApp.loginUser("BJohn", user.password).toThrow("Username or password is incorrect")
		})
	})
})
// log out
describe("Logout method tests", () => {
	it("logout() test", () => {
		scooterApp.registerUser("JohnB", "123", 18)
		const user = scooterApp.registeredUsers["JohnB"]
		scooterApp.loginUser(user.username, user.password)
		scooterApp.logoutUser(user.username)
		expect(user.loggedIn).toBe(false)
	})

	it("logout() Error test", () => {
		scooterApp.registerUser("JohnB", "123", 18)
		const user = scooterApp.registeredUsers["JohnB"]
		expect(() => {
			scooterApp.logoutUser(user.username).toThrow("no such user is logged in")
		})
	})
})

describe("createScooter() method tests", () => {
	it("createScooter() test", () => {
		scooterApp.createScooter("station1")
		expect(scooterApp.stations.station1[0]).toBeInstanceOf(Scooter)
	})
	it("createScooter() Error test", () => {
		expect(() => {
			scooterApp.createScooter("station4").toThrow("no such station error")
		})
	})
})
// rent scooter
describe("rentScooter() method tests", () => {
	it("rentScooter() test", () => {
		scooterApp.registerUser("JohnB", "123", 18)
		const user = scooterApp.registeredUsers["JohnB"]
		scooterApp.createScooter("station1")
		const scooter = scooterApp.stations.station1[0]
		scooterApp.rentScooter(scooter, user)
		expect(scooter.station).toBe(null)
		expect(scooter.user).toEqual(user)
	})

	it("rentScooter() Error Test", () => {
		scooterApp.registerUser("JohnB", "123", 18)
		const user = scooterApp.registeredUsers["JohnB"]
		scooterApp.createScooter("station1")
		const scooter = scooterApp.stations.station1[1]
		expect(() => {
			scooterApp.rentScooter(scooter, user).toThrow("scooter is already rented")
		})
	})
})
// dock scooter
describe("dockScooter() method tests", () => {
	it("dockScooter() test", () => {
		scooterApp.registerUser("JohnB", "123", 18)
		const user = scooterApp.registeredUsers["JohnB"]
		scooterApp.createScooter("station1")
		const scooter = scooterApp.stations.station1[0]
		scooterApp.rentScooter(scooter, user)
		scooterApp.dockScooter(scooter, "station1")
		expect(scooter.station).toBe("station1")
		expect(scooter.user).toBe(null)
	})

	it("dockScooter() Error test1", () => {
		scooterApp.registerUser("JohnB", "123", 18)
		const user = scooterApp.registeredUsers["JohnB"]
		scooterApp.createScooter("station1")
		const scooter = scooterApp.stations.station1[0]
		scooterApp.rentScooter(scooter, user)
		expect(() => {
			scooterApp.dockScooter(scooter, "station2").toThrow("no such station")
		})
	})

	it("dockScooter() Error test2", () => {
		scooterApp.registerUser("JohnB", "123", 18)
		const user = scooterApp.registeredUsers["JohnB"]
		scooterApp.createScooter("station1")
		const scooter = scooterApp.stations.station1[0]
		expect(() => {
			scooterApp.dockScooter(scooter, "station1").toThrow("scooter already at station")
		})
	})
})
