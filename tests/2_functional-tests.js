const chaiHttp = require('chai-http');
const chai = require('chai');
const server = require('../server');
chai.use(chaiHttp);


describe('Functional Tests', function() {
    it("should convert a valid input:GET:api/convert",function(done){
        chai.request(server).get("/api/convert").type("form").send({input:"10L"})
        .end((err,res)=>{
            let resObj=JSON.parse(res.text)
            var should = require('chai').should();
            should.not.exist(err);
            resObj.result.should.be.equal("10 Liter is equal to 2.641722 Gallon.");
            done();
        })
    })
    it("should convert an invalid unit and send invalid unit response",function(done){
        chai.request(server).get("/api/convert").type("form").send({input:"32g"})
        .end((err,res)=>{
            let resObj=JSON.parse(res.text);
            var should=require('chai').should();
            should.not.exist(err);
            resObj.result.should.be.equal("invalid unit");
            done();
        })
    });
    it("should Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert",function(done){
        chai.request(server).get("/api/convert").type("form").send({input:"3/7.2/4kg"})
        .end((err,res)=>{
            var should=require('chai').should();
            should.not.exist(err);
            let resObj=JSON.parse(res.text);
            resObj.result.should.be.equal("invalid number");
            done();
        })
    })
    it("should Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.",function(done){
        chai.request(server).get("/api/convert").type("form").send({input:"3/7.2/4kilomegagram"})
        .end((err,res)=>{
            var should=require('chai').should();
            should.not.exist(err);
            let resObj=JSON.parse(res.text);
            resObj.result.should.be.equal("invalid number and unit");
            done();
        })
    })
    it("should Convert with no number such as kg: GET request to /api/convert",function(done){
        chai.request(server).get("/api/convert").type("form").send({input:"kg"})
        .end((err,res)=>{
            var should=require('chai').should();
            should.not.exist(err);
            let resObj=JSON.parse(res.text);
            resObj.result.should.be.equal("1 Kilogram is equal to 0.453592 Pound.");
            done();
        })
    })
});