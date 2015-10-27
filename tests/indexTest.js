var chai = require('chai');
var index = require('../index.js');

describe('Test add random sum', function(){
    it('should return correct result', function(){
      var randomObject = index.addRandom();
      chai.assert.equal(randomObject.result, randomObject.number1 + randomObject.number2);
    });
})
