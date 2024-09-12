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
})

// test login
it("login tester", () => {
	user.login("test123")
	expect(user.loggedIn).toBe(true)
})

// test logout
it("logout tester", () => {
	user.logout()
	expect(user.loggedIn).toBe(false)
})
