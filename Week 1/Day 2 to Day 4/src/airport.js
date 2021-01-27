const Bag = require("./bag");
const Passenger = require("./passenger");
const Plane = require("./plane");

class Airport {
    static airports = [];
    /**
     * 
     * @param {string} airportName 
     * @param {number} terminals 
     * @param {number} gates 
     */
    constructor(airportName, terminals, gates) {
        this.airportName = airportName;
        this.terminals = terminals;
        this.gates = gates;
        this.planes = [];
    };

    /**
     * @param {string} plane the name/destination of the plane.
     * @param {number} flightNumber of the plane.
     */

    takeOff(plane) {
        if (!plane && !flightNumber) {
            const index = this.planes.indexOf(plane);
            this.planes.splice(index, 1)
                // newDestination loops through the list to find the matchig airport.
            const newDestination = Airport.airports.find(Airport =>
                /* once the program matches the destination with a airport it adds the 
                plane to that airport and remove it from the current (depature airport). 
                */
                { return Airport.airportName === plane.destination; })
            newDestination.newPlane(plane)
        } else throw ("Error the plane name (destination and flightnumber is require")
    };

    removePlane(plane) {
        const index = this.planes.indexOf(plane);
        this.planes.splice(index, 1);
    };

    /**
     * @param {string} destination - Destination of the plane
     * @param {string} plane - The name of the plane
     */
    landPlane(destination, plane) {
        console.log(`The plane is preparing descent and will be landing at ${destination} shortly.`)
        Airport.removePlane(plane);
    };

}


module.exports = Airport