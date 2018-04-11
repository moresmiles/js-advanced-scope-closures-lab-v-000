function produceDrivingRange(range){
  return (beg, end) => {
    let begInt = parseInt(beg);
    let endInt = parseInt(end);
    let distance = Math.abs(endInt - begInt);
    let result = range - distance
      if (result > 0) {
        return `${result} blocks out of range`;
    } else {
        return `within range by ${result}`;
    };
  };
};

function produceTipCalculator(tip){
  return (fare) => {
    return fare * tip;
  };
};

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }
  };
};
