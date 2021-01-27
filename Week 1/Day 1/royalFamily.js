console.log("Hello from JavaScript")

function childOf() {
    return this.parents.map(parents => parents.firstName).join(' & ') || "Parents Unknown"
};
const philip = {
    firstName: "Philip",
    lastName: "Windsor",
    parents: []
}

const queen = {
    firstName: "Elizabeth",
    lastName: "Windsor",
    parents: [],
    childOf: childOf
};

const charles = {
    firstName: "Charles",
    lastName: "Windsor",
    parents: [queen, philip],
    childOf: childOf
};

const frances = {
    firstName: "Frances",
    lastName: "Kydd",
    parents: [],
    childOf: childOf
}

const john = {
    firstName: "John",
    lastName: "Spencer",
    parents: [],
    childOf: childOf
}

const diana = {
    firstName: "Diana",
    lastName: "Windsor",
    parents: [frances, john],
    childOf: childOf
};

const william = {
    firstName: "William",
    lastName: "Windsor",
    parents: [charles, diana],
    childOf: childOf
};




console.log(william.childOf())
module.exports = { william, diana, charles, philip, queen, frances, john }