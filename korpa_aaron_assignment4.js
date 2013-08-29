//alert("JavaScript works!");
// Aaron Korpa
// SDI 1308
// Project 4

var myLibrary = function() {

	//Strings
	//Problem 1: Does a string follow a 123-456-7890 pattern like a phone number?
	
	var isItPhoneNumber = function(valueToBeChecked) {
		var stringLen = valueToBeChecked.length;
		var dashCheck1 = valueToBeChecked.charAt(3);
		var dashCheck2 = valueToBeChecked.charAt(7);
		var checkNum = valueToBeChecked;
		var subOne = checkNum.substring(0,3);
		var subTwo = checkNum.substring(4,7);
		var subThree = checkNum.substring(8);
		var stringComb = subOne + subTwo + subThree;
		var toNum = parseInt(stringComb);
		var reString = "" + toNum;
			if (stringLen === 12) {
				if (dashCheck1 === "-"){
					if (dashCheck2 === "-") {
						if (!isNaN(toNum)) {
							if (reString.length === 10) {
								return true;
							} else {
								return false;
							}
							return true;
						} else {
							return false;
						}
						return true;
					} else{
						return false;
					}
				} else {
					return false;
				}
				return true;
			} else {
				return false;
			};
	};

	//Problem 2
	var varName = function(val) {
	
	};

	//Problem 3
	var varName = function(val) {
	
	};

	//Problem 4
	var varName = function(val) {
	
	};

	//Problem 5
	var varName = function(val) {
	
	};

	//Problem 6
	var varName = function(val) {
	
	};
	
	//Problem 7
	var varName = function(val) {
	
	};

	//Problem 8
	var varName = function(val) {
	
	};

	//Problem 9
	var varName = function(val) {
	
	};

	//Problem 10
	var varName = function(val) {
	
	};

	//Problem 11
	var varName = function(val) {
	
	};

	//Problem 12
	var varName = function(val) {
	
	};
	
	return {
		"isItPhoneNumber": isItPhoneNumber
	};

} // end my Library

var newLib = new myLibrary();

// Outputs for testing

console.log("Is this string a phone number? " + newLib.isItPhoneNumber("206-661-0812"));













