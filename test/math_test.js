'use strict';
let chai = require('chai');
let Math = require('../src/math');
let math = new Math();
var expect = chai.expect ;

describe ('Math', () => {
	it('returns the summation of 2 numbers', () => {
		expect(math.addNumbers(1, 2)).to.equal(3) ;
	});
	
	it('returns the multiplication of 2 numbers', () => {
		expect(math.multiplyNumbers(4,5)).to.equal(20);
	});

	it('returns the division', () => {
		expect(math.divide(4, 2)).to.equal(2);
	});
});

