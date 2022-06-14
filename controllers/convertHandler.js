function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    if(input.match(/[\d]+.?[\d]*\/?[\d]*.?[\d]*/)){
    result=input.match(/[\d]+.?[\d]*\/?[\d]*.?[\d]*/)[0];
    console.log(result)
    if(result.includes("/")){
      let segments=result.split("/");
      if(segments.length>2){
        return new Error("double-fraction")
      }
      result=segments[0]/segments[1]
    }
    return result;
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
      return new Error("invalid input unit")
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
        return "Gallon";
      case "L":
        return "Liter";
      case "mi":
        return "Mile";
      case "km":
        return "Kilometer";
      case "lbs":
        return "Pound";
      case "kg":
        return "Kilogram";
    
      default:
        return new Error("invalid unit")
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;