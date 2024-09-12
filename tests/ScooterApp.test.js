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
})

it("login test", () => {
	scooterApp.registerUser("JohnB", "123", 18)
	const user = scooterApp.registeredUsers["JohnB"]
	scooterApp.loginUser(user.username, user.password)
	expect(user.loggedIn).toBe(true)
})
// log out
it("logout test", () => {
	scooterApp.registerUser("JohnB", "123", 18)
	const user = scooterApp.registeredUsers["JohnB"]
	scooterApp.loginUser(user.username, user.password)
	scooterApp.logoutUser("JohnB")
	expect(user.loggedIn).toBe(false)
})
// rent scooter
it("rent test", () => {
	scooterApp.registerUser("JohnB", "123", 18)
	const user = scooterApp.registeredUsers["JohnB"]
	scooterApp.createScooter("station1")
	const scooter = scooterApp.stations.station1[0]
	scooterApp.rentScooter(scooter, user)
	expect(scooter.station).toBe(null)
	expect(scooter.user).toEqual(user)
})
// dock scooter
it("dock test", () => {
	scooterApp.registerUser("JohnB", "123", 18)
	const user = scooterApp.registeredUsers["JohnB"]
	scooterApp.createScooter("station1")
	const scooter = scooterApp.stations.station1[0]
	scooterApp.rentScooter(scooter, user)
	scooterApp.dockScooter(scooter, "station1")
	expect(scooter.station).toBe("station1")
	expect(scooter.user).toBe(null)
})
