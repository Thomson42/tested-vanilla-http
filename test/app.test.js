const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../lib/app.js');
const assert = require('assert');

describe('getmyinfo', ()=>{
        const request = chai.request(app);

    it('responds with a json of my info', ()=>{
        request.get('/coder')
            .end((err,res)=> {
                if (err) done(err);
                assert.ok(res.text);
                done();
            });

    })
    it('says hello world to everyting else', () =>{
        request.get('/greeting')
            .end((err,res)=> {
                if (err) done(err);
                assert.equal(res.text, 'Hello Stranger');
                done();
            });

    })

});
describe('404 error', ()=> {
    //tests incomplete
    const request = chai.request(app);
    it('should return status code 404 Not Found when a missing path is taken', (done) => {
        request.post('/heck/you')
            .end((err,res) => {
                assert.ok(res.notFound);
                done();
            });

    });

});