let isSymetric = require('../symmetry').isSymmetric;

let expect = require('chai').expect;

describe('Check symmetry', () => {
    describe('General tests', () => {
        it('should be a function', () => {
            expect(typeof isSymetric).to.equal('function');
        })
    });

    describe('Value tests', () => {
        it('should return true for [1,2,3,3,2,1]', () => {
            expect(isSymetric([1,2,3,3,2,1])).to.be.true;
        });
        it('should return false for [1,2,3,4,2,1]', () => {
            expect(isSymetric([1,2,3,4,2,1])).to.be.false;
        });
        it('should return true for [1,2,3,2,1]', () => {
            expect(isSymetric([1,2,3,2,1])).to.be.true;
        });
        it('should return false for [1,2,3,4,1]', () => {
            expect(isSymetric([1,2,3,4,1])).to.be.false;
        });
        it('should return false for [1,2]', () => {
            expect(isSymetric([1,2])).to.be.false;
        });
        it('should return true for [1]', () => {
            expect(isSymetric([1])).to.be.true;
        });
        it(`should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5] `, () => {
            expect(isSymetric([5,'hi',{a:5},new Date(),{a:5},'hi',5] )).to.be.true;
        });
        it(`should return false for [5,'hi',{a:5},new Date(),{X:5},'hi',5] `, () => {
            expect(isSymetric([5,'hi',{a:5},new Date(),{X:5},'hi',5] )).to.be.false;
        });
        it('should return false for 1, 2, 3', () => {
            expect(isSymetric(1, 2, 3)).to.be.false;
        });
        it('should return true for [udf, udf]', () => {
            expect(isSymetric([NaN, NaN])).to.be.true;
        });
    })
});