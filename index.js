function produceDrivingRange(range){
  return (beg, end) => {
    const begInt = Number(beg.slice(0,2));
    const endInt = Number(end.slice(0,2));
      if (endInt - begInt > range) {
        let result = Math.abs(endInt - begInt - range);
        return `${result} blocks out of range`;
    } else {
        let result = Math.abs(endInt - begInt - range);
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
