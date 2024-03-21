class UberPriceCalculator {
    constructor(serviceType, baseFare, perKmRate) {
        this.serviceType = serviceType;
        this.baseFare = baseFare;
        this.perKmRate = perKmRate;
    }

    calculatePrice(distance) {
        const totalPrice = this.baseFare + (this.perKmRate * distance);
        return totalPrice.toFixed(2); // Round to two decimal places
    }

    getServiceType() {
        return this.serviceType;
    }

    setServiceType(serviceType) {
        this.serviceType = serviceType;
    }

    getBaseFare() {
        return this.baseFare;
    }

    setBaseFare(baseFare) {
        this.baseFare = baseFare;
    }

    getPerKmRate() {
        return this.perKmRate;
    }

    setPerKmRate(perKmRate) {
        this.perKmRate = perKmRate;
    }
}

// Example usage:
const uberX = new UberPriceCalculator("UberX", 2.5, 1.2);
const distanceTraveled = 10; // Assume the distance traveled is 10 kilometers
const totalPrice = uberX.calculatePrice(distanceTraveled);
console.log(`The total price for an UberX ride of ${distanceTraveled} km is $${totalPrice}.`);
