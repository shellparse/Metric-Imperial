
'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get("/api/convert",(req,res)=>{
    let unit=convertHandler.getUnit(req.query.input);
    let value=convertHandler.getNum(req.query.input);
    let result=convertHandler.convert(value,unit);
    if(typeof result==="number"){
      result=parseFloat(result.toFixed(5));
    }
    if(typeof unit==="string"&&typeof value ==="number"){
      res.send({initNum:value,initUnit:unit,returnNum:result,returnUnit:convertHandler.getReturnUnit(unit),string:convertHandler.getString(value,convertHandler.spellOutUnit(unit),result,convertHandler.spellOutUnit(convertHandler.getReturnUnit(unit)))});
    }else if(unit instanceof Error&&value instanceof Error){
      res.send({string:"invalid number and unit"})
    }else if(unit instanceof Error){
      res.send({string:unit.message})
    }else if(value instanceof Error){
      res.send({string:value.message})
    }else{
      res.send({string:"something went wrong check your inputs"})
    }
  })

};