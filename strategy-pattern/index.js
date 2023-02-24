class Fedex {
  calculate(packgeDoc) {
    return 2.45;
  }
}

class UPS {
  calculate(packgeDoc) {
    return 1.56;
  }
}

class USPS {
  calculate(packgeDoc) {
    return 4.5
  }
}

class Shipping {
  constructor() {
    this.company = "";
  }

  setStragegy(company) {
    this.company = company;
  }

  calculate(packgeDoc) {
    return this.company.calculate(packgeDoc);
  }
}


const fedex = new Fedex();
const ups = new UPS();
const usps = new USPS();

const packgeDoc = { 
  from: "Korean", 
  to: "Japan", 
  weight: 1.56,
}

const shipping = new Shipping();

shipping.setStragegy(fedex);
console.log("Fedex: ", shipping.calculate(packgeDoc));

shipping.setStragegy(ups);
console.log("ups: ", shipping.calculate(packgeDoc));

shipping.setStragegy(usps);
console.log("usps: ", shipping.calculate(packgeDoc));

// fedex.calculate(package);
// ups.calculate(package);
// usps.calculate(package);