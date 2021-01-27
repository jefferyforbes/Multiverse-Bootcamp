const Sales = require("../src/sales")

describe("Sales", function() {
    test("Checking: Necessary customer details entered", function() {
        expect(() => Sales = new Sales().tothrowError("Please ensure that the customer details are recorded."))
    })

    test("Checking: Initialisation", function() {
        firstSold = new Sales("John", "johndoe@gmail.com", "0789574643", "#836d9lf08")
        expect(firstSold.customerName).toEqual("John")
    })

    test("Checking: Date function", function() {
        firstSold = new Sales("John", "johndoe@gmail.com", "0789574643", "#836d9lf08")
        expect(firstSold.customerPurchaseDate()).toBeTruthy()
    })


    test("Checking: Total Cost Function", function() {
        firstSold = new Sales("John", "johndoe@gmail.com", "0789574643", "#836d9lf08")
            // expect(firstSold.totalCost(2, 3, 2.5)()).toBe(6.34)
        expect(firstSold.totalCost(2, 3, 2.5)).toBe(7.5)
    })


})