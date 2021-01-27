const { expect } = require("@jest/globals");
const Passenger = require("../src/passenger");

describe("Bags", function() {

    test("Checking: Error Message for the name parameter to be empty", function() {
        (expect(() => new Passenger(undefined, 22, 57, 4422657)).toThrowError("All passengers require their name to be on the system!"))
    });

    test("Checking: Error Message for the age parameter to be empty", function() {
        (expect(() => new Passenger("Jeffery", undefined, 45, 458383904)).toThrowError("All passengers require their age to be on the system!"))
    });

    test("Checking: Error Message for the ticket number parameter to be empty", function() {
        (expect(() => new Passenger("Jeffery", 22, 65, undefined)).toThrowError("All passengers require their ticket number to be on the system!"))
    });

    test("Checking: Bags Array", function() {
        let timmy = new Passenger("Timmy Doe", 22, 4, 7546363)
        timmy.addBags(2)
        expect(timmy.bags).toContain(2)
    });

});