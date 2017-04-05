const chai = require('chai');
const expect =  chai.expect;

const bubble = require('../bubble.js');

describe('bubble', () => {
  it('should be a function', () => {
    expect(bubble).to.be.a('function');
  });
  it('should be able to sort out the array ', () => {
    expect(bubble([2,1,3,0,4])).to.deep.equal([0,1,2,3,4]);
    expect(bubble([10,2])).to.deep.equal([2,10]);
  });
});