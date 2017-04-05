const chai = require('chai');
const expect = chai.expect;

const quick = require('../quick.js');

describe('quick', () => {
  it('should be a function', () => {
    expect(quick).to.be.a('function');
  });
  it('will return false if arr is not an array', () => {
    expect(quick({})).to.be.equal(false);
  });
  it('should be a numbered array', () => {
    expect(quick(['2',2,3])).to.be.equal(false);
    expect(quick(['2','hello','hi'])).to.be.equal(false);
    expect(quick(3,4,5,6)).to.be.equal(false);
  });
  it('should be able to sort out this array', () => {
    expect(quick([6,1,2,3,4,8,9,10])).to.deep.equal([1,2,3,4,6,8,9,10]);
    expect(quick([4,2,6,1,9])).to.deep.equal([1,2,4,6,9]);
    expect(quick([2,2,4,10,1,0,0])).to.deep.equal([0,0,1,2,2,4,10]);
    expect(quick([1,2,3,4,5,])).to.deep.equal([1,2,3,4,5]);
  });
});