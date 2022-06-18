function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    if(input.match(/[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/)){
    result=input.match(/[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/)[0];
    if(result.includes("/")){
      let segments=result.split("/");
      if(segments.length>2){
        return new Error("invalid number")
      }
      result=segments[0]/segments[1]
    }
    return parseFloat(result);
  }else{
    return 1;
  }
  };
  
  this.getUnit = function(input) {
    let result;
    if(input.match(/gal|L|mi|km|lbs|kg/))
    {
      result=input.match(/gal|L|mi|km|lbs|kg/)[0]
      return result;
    }else{
      return new Error("invalid unit")
    }
  }
  
  this.getReturnUnit = function(initUnit) {
    switch (initUnit) {
      case "gal":
        return "L";
      case "L":
        return "gal";
      case "mi":
        return "km";
      case "km":
        return "mi";
      case "lbs":
        return "kg";
      case "kg":
        return "lbs";
    
      default:
        return new Error("invalid unit")
    }
  };

  this.spellOutUnit = function(unit) {
    switch (unit) {
      case "gal":
        return "gallons";
      case "L":
        return "liters";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      case "lbs":
        return "pounds";
      case "kg":
        return "kilograms";
    
      default:
        return new Error("invalid unit")
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {

      case "gal":
        result=initNum*galToL;
        return result;
      case "L":
        result=initNum/galToL;
        return result;
      case "mi":
        result=initNum*miToKm;
        return result;
      case "km":
        result=initNum/miToKm;
        return result;
      case "lbs":
        result=initNum/lbsToKg;
        return result;
      case "kg":
        result=initNum*lbsToKg;
        return result;
      default:
        return new Error("invalid unit")
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`
  };
  
}

module.exports = ConvertHandler;