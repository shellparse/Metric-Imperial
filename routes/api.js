
'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get("/api/convert",(req,res)=>{
    let unit=convertHandler.getUnit(req.body.input);
    let value=convertHandler.getNum(req.body.input);
    let result=convertHandler.convert(value,unit);
    if(typeof result==="number"){
      result=result.toFixed(6);
    }
    if(typeof unit==="string"&&typeof value ==="number"){
      res.json({result:convertHandler.getString(value,convertHandler.spellOutUnit(unit),result,convertHandler.spellOutUnit(convertHandler.getReturnUnit(unit)))});
    }else if(unit instanceof Error&&value instanceof Error){
      res.json({result:"invalid number and unit"})
    }else if(unit instanceof Error){
      res.json({result:unit.message})
    }else if(value instanceof Error){
      res.json({result:value.message})
    }else{
      res.json({result:"something went wrong check your inputs"})
    }
  })

};