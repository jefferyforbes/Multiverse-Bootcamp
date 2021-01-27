const { expect } = require("@jest/globals");
const royalFamily = require("./royalFamily");

describe("royalFamily", () => {

    test.skip("check name", () => {
        expect(royalFamily.william.firstName).toEqual("William");
        expect(royalFamily.william.lastName).toEqual("Windsor");
    });
    test.skip("Child Of", () => {
        expect(royalFamily.william.parents.firstName).toEqual(royalFamily.charles.firstName & royalFamily.diana.firstName)
    });
});