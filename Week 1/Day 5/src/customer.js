const Person = require("./person")


class Customer extends Person {
    constructor(customerName, salesID) {
        this.customerName = customerName;
        this.salesID = salesID;
        this.returnDate;
    }

    hireScooter(scooterID) {

        console.log(``)
    }

    returnScooter(scooterID) {
        console.log(`${this.customerName} would like to return their scooter. with the Scooter ID ${scooterID} and
        sales reference number ${this.salesID}`)
    }


}

module.exports = Customer;