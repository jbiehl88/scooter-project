const User = require("../src/User")

const user = new User("Joe Bloggs", "test123", 21)

// User tests here
describe("User property tests", () => {
	// test username
	test("username should be a string", () => {
		expect(typeof user.username).toBe("string")
	})
	// test password
	it("password should be a string", () => {
		expect(typeof user.password).toBe("string")
	})
	// test age
	it("age should be a number", () => {
		expect(typeof user.age).toBe("number")
	})
	it("loggedIn should be a boolean", () => {
		expect(typeof user.loggedIn).toBe("boolean")
	})
})

// test login
it("login tester", () => {
	user.login("test123")
	expect(user.loggedIn).toBe(true)
})

it("login error tester", () => {
	expect(() => {
		user.login("test12").toThrow("Username or password is incorrect")
	})
})

// test logout
it("logout tester", () => {
	user.logout()
	expect(user.loggedIn).toBe(false)
})

it("logout error tester", () => {
	user.loggedIn = false
	expect(() => {
		user.logout().toThrow("no such user is logged in")
	})
})
