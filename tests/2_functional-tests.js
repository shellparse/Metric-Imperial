const chaiHttp = require('chai-http');
const chai = require('chai');
const server = require('../server');
chai.use(chaiHttp);


suite('Functional Tests', function() {
    it("should convert a valid input:GET:api/convert",function(done){
        chai.request(server).get("/api/convert").type("form").send({input:"10L"})
        .end((err,res)=>{
            var should = require('chai').should();
            should.not.exist(err);
            res.should.be.equal("2.64172 Gallon")
            done();
        })
    })
});