let package = {
    weight: "1.5",
    name: "Gaming Pc",
    from: {
        name: "Mubasher",
        address: "lhr",
    },
    to: {
        name: "CeaXer",
        address: "hnd",
    },
};

// ---------------------------------
// NORMAL WAY
// ---------------------------------
// function Fedex() {
//     this.calculateShippingRate = (package) => {
//         // SOME CALCULATION
//         return package.weight * 2.25;
//     };
// }

// function UPS() {
//     this.calculateShippingRate = (package) => {
//         // SOME CALCULATION
//         return package.weight * 1.56;
//     };
// }

// function USPS() {
//     this.calculateShippingRate = (package) => {
//         // SOME CALCULATION
//         return package.weight * 4.5;
//     };
// }

// const fedex = new Fedex();
// const ups = new UPS();
// const usps = new USPS();

// console.log("FEDEX RATE: ", fedex.calculateShippingRate(package));
// console.log("UPS RATE: ", ups.calculateShippingRate(package));
// console.log("USPS RATE: ", usps.calculateShippingRate(package));

// ---------------------------------
// PATTERN WAY
// ---------------------------------
function Fedex() {
    this.calculateShippingRate = (package) => {
        // SOME CALCULATION
        return package.weight * 2.25;
    };
}

function UPS() {
    this.calculateShippingRate = (package) => {
        // SOME CALCULATION
        return package.weight * 1.56;
    };
}

function USPS() {
    this.calculateShippingRate = (package) => {
        // SOME CALCULATION
        return package.weight * 4.5;
    };
}

const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

function Shipping() {
    this.company = "";

    this.setStrategy = (company) => {
        return (this.company = company);
    };

    this.calculateShippingRate = (package) => {
        return this.company.calculateShippingRate(package);
    };
}

const shipping = new Shipping();

console.log("FEDEX RATE: ", shipping.setStrategy(fedex).calculateShippingRate(package));

console.log("UPS RATE: ", shipping.setStrategy(ups).calculateShippingRate(package));

console.log("USPS RATE: ", shipping.setStrategy(usps).calculateShippingRate(package));
