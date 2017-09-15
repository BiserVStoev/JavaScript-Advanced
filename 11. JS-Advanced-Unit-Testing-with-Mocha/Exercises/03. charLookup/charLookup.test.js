let lookupChar = require('./charLookUp').lookupChar;
let expect = require('chai').expect;

describe('Test cases for charLookup', function () {
    it('should return undefined when input element is number', () => {
        expect(lookupChar(5, 1)).to.be.undefined;
    });

    it('should return undefined when input element is object', () => {
        expect(lookupChar({name: 'govedo'}, 1)).to.be.undefined;
    });

    it('should return undefined when input index is string', () => {
        expect(lookupChar('asd', '1')).to.be.undefined;
    });

    it('should return undefined when input index is floating Point', () => {
        expect(lookupChar('asd', 1.22)).to.be.undefined;
    });

    it('should return undefined when input index is object', () => {
        expect(lookupChar('asd', {1: 'asd'})).to.be.undefined;
    });

    it('should return incorrect index msg when input index is negative', () => {
        expect(lookupChar('asd', -1)).to.equal('Incorrect index');
    });

    it('should return incorrect index msg when input index is more than str length', () => {
        expect(lookupChar('asd', 3)).to.equal('Incorrect index');
    });

    it('should return incorrect index msg when input index is more than str length', () => {
        expect(lookupChar('asd', 4)).to.equal('Incorrect index');
    });

    it('should return correctCharAtIndex', () => {
        expect(lookupChar('asd', 2)).to.equal('d');
    });
});