class Bag {
    /**
     *  /**
     * The class is meant to indicate a luggage being added to the aircraft
     * @param {number} weight 
     */
    constructor(weight) {
        /**
         * The class requires the input of @param {number} weight to create the class
         */
        this.weight = weight;
        // This verification check ensures that the user *

        this.largeBags = [];
        this.carryOnBags = [];

        if (!weight) {
            throw "Error a weight must be added!"
        };
        /*
         I created to arrays to store the passenger bags based on the sizes
         for anything equal too or below 9 kg will be moved to the
         "carryOnBags" array. Anything else will be moved to the "largeBags" array.
         */
    }

    /*The error thrown is thrown to make sure that anything that
    does not match the to criterias are errors and is highlighted even before
    the testing flags it. 
    */

    /**
     * The array is is determined by the weight of each individual bag the person has. 
     * @param {number} weight number in "Kg"
     */

    isCarryOn(weight) {
        if (weight <= 9) {
            this.carryOnBags.push(weight)
        } else if (weight > 9) {
            this.largeBags.push(weight)
        } else throw new "Error, carry on status unknown"
            // Conditional statements; to make push the bags into a specific array based on weight value.
    }
};

module.exports = Bag;