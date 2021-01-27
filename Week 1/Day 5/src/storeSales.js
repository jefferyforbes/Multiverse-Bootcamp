const Sales = require("./sales")

class StoreSales extends Sales {
    constructor(storeName, salesPerson, salesLocation) {
        super(customerName, customerPurchaseDate)
        this.storeName = storeName;
        this.salesPerson = salesPerson;
        this.salesLocation = salesLocation;
        this.allSales = [];
    }
    scooterSale(customerName, customerPurchaseDate) {}
    scooterBooking(customerName, scooterID) {}
}

module.exports = StoreSales