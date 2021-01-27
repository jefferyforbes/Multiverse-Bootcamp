const Passenger = require("./passenger");
const CrewMember = require("./crewMember");
const Airport = require("./airport");
const Person = require("./person")

class Plane {
    /**
     * This class creates planes
     * @param {string} destination of the plane.
     * @param {number} flightNumber of the plane (identification).
     * @param {boolean} CrewMember true or false value whether a passenger is a Crew Member.
     * @param {array} crewMemberList of all crew on the plane.
     * @param {array} passengerList of all commerical passengers on the plane.
     */

    constructor(destination, flightNumber) {
        this.destination = destination;
        this.flightNumber = flightNumber;
        this.crewMemberList = [];
        this.passengerList = [];
    }

    /**
     * @param {string} person the name of the person boarding the plae
     */

    boardPerson(person) {
        if (person instanceof Passenger) {
            this.passengerList.push(person);
        } else {
            this.crewMemberList.push(person)
        };
    }

    /**
     * @param {array} passengerList List of commerical passengers
     */
    passengerCheck(passengerList) {
        console.log(passengerList)
    };

    /**
     * 
     * @param {array} crewMemberList - Of the crew members
     */
    crewCheck(crewMemberList) {
        console.log(crewMemberList)
    };
}

module.exports = Plane;