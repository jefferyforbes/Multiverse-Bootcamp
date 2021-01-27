const { time } = require("console");

class Sales {
    /**
     * This is the sales data required to push through a customer sale
     * @param {string} customerName 
     * @param {date} customerPurchaseDate 
     * @param {string} email 
     * @param {number} phoneNumber 
     * @param {number} price
     */

    constructor(customerName, email, phoneNumber, salesID) {
        this.customerName = customerName
        this.customerPurchaseDate
        this.email = email
        this.phoneNumber = phoneNumber
        this.salesID = salesID
        this.price = 2
        this.fullPurchaseDate

        /* The minimum price to access the bike is £1 as a low base cost and the total cost
        and further costs are calculated through the time spent and distance travelled.
        */

        if (!customerName || !email || !phoneNumber || !salesID) { Error("Please ensure that the customer details are recorded.") }
    }

    customerPurchaseDate(fullPurchaseDate) {
        fullPurchaseDate = new Date().toLocaleDateString
        return fullPurchaseDate;
    }

    /**
     * @param {number} price The intial price of the scooter (£2).
     * @param {number} distTravel Total distance travelled with the scooter.
     * @param {number} timeSpent Total time spent with the scooter.
     */
    totalCost(price, distTravel, timeSpent) {
        //The totalCost function calculates the full price of the user invoice based distance, time and the base £2.
        let totalPrice;

        distTravel * 0.53;
        /*Distance should be calculate in miles.
        Miles is standard as you would explain it(1.5 miles)
        */

        timeSpent * 1.1;
        /*For every hour the time rate adds £2.50.
        time spent should be calculated in hours with decimals representing minutes.
        For example (1 hour and 30 minutes == 1.5)
         */

        totalPrice = price + distTravel + timeSpent;

        /*The if statement caps the price of the first day of the customer's cost to £24.
         */

        return totalPrice;
    }

    allSalesData(customerName, customerPurchaseDate, email, phoneNumber, totalCost) {
        console.log(`The full details of the sale is ${customerName}, ${customerPurchaseDate}, ${email}, ${phoneNumber}, ${totalCost}`);
    }
}
module.exports = Sales