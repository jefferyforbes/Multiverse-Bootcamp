const { expect } = require("@jest/globals");
const Plane = require("../src/plane");
const Airport = require("../src/airport")

describe("Plane", function() {
    test("Checking: Destination", function() {
        const testPlane = new Plane("Spain", 736893);
        expect(testPlane.destination).toContain("Spain")
        expect(testPlane.flightNumber).toEqual(736893)
    });

    test("Checking: Flight Number ", function() {
        const testPlane = new Plane("Spain", 736893);
        expect(testPlane.flightNumber).toEqual(736893)
    });

    test("Checking: Board Person", function() {
        const testPlane = new Plane("Spain", 736893);
        testPlane.boardPerson("timmy")
        expect(testPlane.crewMemberList).toContain("timmy")
    });

    test("Checking: Land Plane", function() {
        const testPlane = new Plane("Germany", "planeGermany")
        const testAirport = new Airport("Heathrow", 2, 2)
        expect(testAirport.landPlane(testPlane)).toEqual(`The plane is preparing descent and will be landing at ${destination} shortly.`)
    });

    test("Checking: Passenger Check", function() {});

    test("Checking: Crew Check", function() {});
});