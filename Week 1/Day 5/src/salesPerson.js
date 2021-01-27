const Person = require("./person")


class SalesPerson extends Person {
    constructor(name, salesPersonName, salesID) {
        super(name)
        this.name = salesPersonName;
        this.salesID = salesID;
    }
    completeSale(c) {
        console.log(`${this.salesPersonName} has completed the sale of ${salesID} for our customer ${customerName}`)
    }
}

module.exports = SalesPerson