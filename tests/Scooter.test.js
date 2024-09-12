const Scooter = require("../src/Scooter")

// typeof scooter === object
describe("scooter object", () => {
	test("Scooter class should create Scooter instance", () => {
		const scooter = new Scooter()
		expect(scooter).toBeInstanceOf(Scooter)
	})
})

// Method tests
describe("scooter methods", () => {
	// tests here!
	const newScooter = new Scooter("station1")
	// rent method
	it("test rent() user", () => {
		newScooter.rent("JohnB")
		expect(newScooter.user).toBe("JohnB")
	})
	it("test rent() station", () => {
		newScooter.rent("JohnB")
		expect(newScooter.station).toBe(null)
	})
	// dock method
	it("test dock() user", () => {
		newScooter.dock("station1")
		expect(newScooter.user).toBe(null)
	})
	it("test dock() station", () => {
		newScooter.dock("station1")
		expect(newScooter.station).toBe("station1")
	})
	// requestRepair method
	// it("test requestRepair()", () => {})

	// charge method
	// it("test charge()", () => {})
})
