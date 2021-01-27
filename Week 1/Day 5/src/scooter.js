class Scooter {
    constructor(scooterID) {
        this.scooterID = scooterID;
        this.chargePercentage = chargePercentage;
    }

    async scooterCharge(scooterID) {
        console.log(`${this.scooterID} has started charging.`)
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Charge Complete")
    }

    powerON() {}
    powerOff() {}
    Drive() {}
    repairScooter() {}
    chargeScooter() {}


}

module.exports = Scooter