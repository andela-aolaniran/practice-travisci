'use strict';
class Math{
	constructor(){
		this.PI = Math.PI ;
	}

	addNumbers(numOne, numTwo){
		return numOne + numTwo ;
	}

	multiplyNumbers(numOne, numTwo){
		return numOne * numTwo ;
	}

	divide(numOne, numTwo){
		if(numTwo !== 0)
			return (numOne / numTwo) ;
		else
			return NaN ;
	}
}

module.exports = Math;