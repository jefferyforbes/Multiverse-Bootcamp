const Bags = require("./bag");
const Person = require("./person");

class Passenger extends Person {
    /**
     * The passenger represents one of the extensions from the Person class
     * and inherits some of it's properties including the name and bags.
     * @param {string} name this is the full (first and last name) of the passenger.
     * @param {number} age of the passenger.
     * @param {Array} bags is an array of bag weights.
     * @param {number} ticketNumber is the series of random unique number given to passengers.
     */
    constructor(name, age, bags, ticketNumber) {
        super(name, bags);
        this.name = name;
        this.age = age;
        this.bags = [];
        this.ticketNumber = ticketNumber;

        if (!name) {
            throw ("All passengers require their name to be on the system!");
        } else if (!age) {
            throw ("All passengers require their age to be on the system!")
        } else if (!ticketNumber) {
            throw ("All passengers require their ticket number to be on the system!")
        }
    };

    /**
     * The array is is determined by the weight of each individual bag the person has. 
     * @param {Array} bags is an array of bag weights.
     */

    addBags(bags) {
        this.bags.push(bags)
    };
}

let getinfo = prompt("Enter")
module.exports = Passenger;