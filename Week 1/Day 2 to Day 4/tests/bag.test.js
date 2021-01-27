const { expect } = require("@jest/globals");
const Bag = require("../src/bag");


describe("Bag Tests", function() {
    test("Checking: Weight has a weight", function() {
        const bag = new Bag(13);
        expect(bag.weight).toBe(13);
    });

    test("Checking: Throws an error with no weight", function() {
        expect(() => new Bag()).toThrowError("Error a weight must be added!");
    });

    test("Checking: Weight does have a truthy value", function() {
        const bag = new Bag(3);
        expect(bag.weight).toBeTruthy();
    }) /** This was created to cover line 31 error checks ----> But it doesnt need some tweaking. */

    test("Checking: The carry on status", function() {
        const carryBag1 = new Bag(11)
        expect(carryBag1).toBeTruthy()
    });

    test("Checking: The carryOn Method", function() {
        let jimmyBag = new Bag(7)
        jimmyBag.isCarryOn(7)
        jimmyBag.isCarryOn(15)
        expect(jimmyBag.carryOnBags).toContain(7)
        expect(jimmyBag.largeBags).toContain(15)
    });
})