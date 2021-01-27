const Person = require("./person")

class CrewMember extends Person {

    constructor(name) {
        super(name)
        this.bags = [];
    };
};

module.exports = CrewMember;