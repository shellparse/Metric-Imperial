
'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get("/api/convert",(req,res)=>{
    let unit=convertHandler.getUnit(req.body.input);
    console.log("unit ",unit);
    let value=convertHandler.getNum(req.body.input);
    console.log("value "+value)
    let result=convertHandler.convert(value,unit);
    console.log("result "+result);
    res.json({result:convertHandler.getString(value,convertHandler.spellOutUnit(unit),result,convertHandler.spellOutUnit(convertHandler.getReturnUnit(unit)))});
  })

};