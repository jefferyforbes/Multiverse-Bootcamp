class Person {
    /**
     * Creates a Person.
     * @param {string} name of the person.
     * @param {array} allBags the list of all bags (large and carry on) for the person.
     */
    constructor(name, allBags) {
        this.name = name;
        this.allBags = allBags;
    }
/**
 * Pushes all bags from the bags class into one array.
 * @param {array} largeBags bags with weight above 9kg.
 * @param {array} carryOnBags bags with weight equal or below 9kg.
 */
    addAllBags(largeBags, carryOnBags){
    this.allBags.push(largeBags, carryOnBags)}
}

module.exports = Person;