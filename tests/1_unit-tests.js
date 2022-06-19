const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    it(("should read a whole number input"),function(){
      let param = "10";
      assert.equal(convertHandler.getNum(param),10)
    })
    it("should read decimal number input",function(){
      let param = "25.5"
      assert.equal(convertHandler.getNum(param),25.5)
    })
    it("should read fractional numbers",function(){
      let param = "3/4";
      assert.equal(convertHandler.getNum(param),0.75)
    })
    it("should read fractional with decimal numbers",function(){
      let param = "1.5/2.5"
      assert.equal(convertHandler.getNum(param),0.6)
    })
    it("should return Error object on double fraction",function(){
      let param = "1/2/3";
      assert.instanceOf(convertHandler.getNum(param),Error)
    })
    it("should give 1 if no numeral is provided",function(){
      let param = "mido"
      assert.equal(convertHandler.getNum(param),1)
    })
    it("should return the right input unit",function(){
      let value = ["gal","L","mi","km","lbs","kg"];
      assert.include(value,convertHandler.getUnit("100gal"));
      assert.include(value,convertHandler.getUnit("1L"));
      assert.include(value,convertHandler.getUnit("L1"));
      assert.include(value,convertHandler.getUnit("1/2mi"));
      assert.include(value,convertHandler.getUnit("1.2km"));
    })
    it("should return error on invalid input unit",function(){
      assert.instanceOf(convertHandler.getUnit("5lb"),Error);
      assert.instanceOf(convertHandler.getReturnUnit("32g"),Error);
    })
    it("should spell out the right unit",function(){
      assert.equal(convertHandler.spellOutUnit("gal"),"gallons");
      assert.equal(convertHandler.spellOutUnit("L"),"liters");
      assert.equal(convertHandler.spellOutUnit("km"),"kilometers");
      assert.equal(convertHandler.spellOutUnit("kg"),"kilograms");
      assert.equal(convertHandler.spellOutUnit("lbs"),"pounds");
      assert.equal(convertHandler.spellOutUnit("mi"),"miles");
    })
    it("should convert gal to L",function(){
      assert.equal(convertHandler.getReturnUnit("gal"),"L");
    })
    it("should convert L to gal",function(){
      assert.equal(convertHandler.getReturnUnit("L"),"gal");
    })
    it("should convert km to mi",function(){
      assert.equal(convertHandler.getReturnUnit("km"),"mi");
    })
    it("should convert mi to km",function(){
      assert.equal(convertHandler.getReturnUnit("mi"),"km");
    })
    it("should convert lbs to kg",function(){
      assert.equal(convertHandler.getReturnUnit("lbs"),"kg");
    })
    it("should convert kg to lbs",function(){
      assert.equal(convertHandler.getReturnUnit("kg"),"lbs");
    })
    it("should convert a value to the related aim value",function(){
      assert.equal(convertHandler.convert(10,"L"),2.6417217685798895);
      assert.equal(convertHandler.convert(2.6417217685798895,"gal"),10);
    });
  });