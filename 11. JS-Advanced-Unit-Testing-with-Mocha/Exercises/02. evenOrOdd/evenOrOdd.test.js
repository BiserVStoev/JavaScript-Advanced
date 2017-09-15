let isOddOrEven = require('./isOdd').isOddOrEven;
let expect = require('chai').expect;

describe('Test cases for isOddOrEven(str) function', function () {
    it('should return odd on {"а"}', () => {
        expect(isOddOrEven("а")).to.equal('odd');
    });

    it('should return even on {"аb"}', () => {
        expect(isOddOrEven("аb")).to.equal('even');
    });

    it('should return even on {""}', () => {
        expect(isOddOrEven("")).to.equal('even');
    });

    it('should return even on {"a" * 100}', () => {
        expect(isOddOrEven('a'.repeat(100))).to.equal('even');
    });

    it('should return odd on {"a" * 999}', () => {
        expect(isOddOrEven('a'.repeat(999))).to.equal('odd');
    });

    it('should return undefined on [1,2,3,4]', () => {
        expect(isOddOrEven([1,2,3,4])).to.be.undefined;
    });

    it('should return undefined on {1}', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });
});