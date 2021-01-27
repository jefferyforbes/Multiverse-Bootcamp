const { expect } = require("@jest/globals");
const CrewMember = require("../src/crewMember");

describe("Crew Member", function() {
    test("Checking: Intialisation", function() {
        crewMemberJohn = new CrewMember("John")
        expect(crewMemberJohn.name).toEqual("John")
    })
});