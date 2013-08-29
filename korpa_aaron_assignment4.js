//alert("JavaScript works!");
// Aaron Korpa
// SDI 1308
// Project 4

var myLibrary = function() {

	//STRING FUNCTIONS
	
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

	//Problem 2: Does a string follow an aaa@bbb.ccc pattern like an email address?
	var varName = function(val) {
	
	};

	//Problem 3: Is the string a URL (Does it start with an http:// or https://)?
	var varName = function(val) {
	
	};

	//Problem 4: Title-case a string (split into words, then uppercase the first letter of 
	//			 each word).
	var varName = function(val) {
	
	};

	//Problem 5: Given a string that is a list of things separated by a given string, as 
	// 			 well as another string separator, return a string with the first 
	//			 separator changed to the second: "a,b,c" + "," + "/" --> "a/b/c".
	var sepReplace = function(stringWithSep, sepToReplace, replacementSep) {
		var string1 = stringWithSep;
		var string2 = string1.split(sepToReplace).join(replacementSep);
		return string2;
	};
	
	//NUMBER FUNCTIONS
	
	//Problem 6: Format a number to use a specific number of decimal places as for money: 
	//			 2.1 --> 2.10
	var fixedDecimals = function(numberToFix, numberOfDecimals) {
		var numb = numberToFix;
		var fixedNum = parseFloat(numberToFix).toFixed(numberOfDecimals);
		return fixedNum;
	};
	
	//Problem 7: Fuzzy-match a number: is the number above or below a number within a 
	//			 certain percent?
	var varName = function(val) {
	
	};

	//Problem 8: Find the number of hours or days difference between two dates.
	var varName = function(val) {
	
	};

	//Problem 9: Given a string version of a number, such as "42", return the value as an 
	//			 actual Number data type, such as 42.
	var stringToNum = function(stringToConvert) {
		var string1 = stringToConvert;
		var string2 = parseInt(string1);
			return string2;
	};
	
	//ARRAY FUNCTIONS
	
	//Problem 10: Find the smallest value in an array than is greater than a given number.
	var varName = function(val) {
	
	};

	//Problem 11: Find the total value of just the numbers in an array, even if some of 
	//			  the items are not numbers.
	var varName = function(val) {
	
	};

	//Problem 12: Given an array of objects and the name of a key, return the array sorted 
	//			  by the value of that key in each of the objects: 
	//			  "a" + [{a:2},{a:3},{a:1}] --> [{a:1},{a:2},{a:3}].
	var varName = function(val) {
	
	};
	
	return {
		"isItPhoneNumber": isItPhoneNumber,
		"sepReplace":      sepReplace,
		"fixedDecimals":   fixedDecimals,
		"stringToNum":     stringToNum
	};

} // end my Library

var newLib = new myLibrary();

// Outputs for testing

//Problem 1: Is this string a phone number?
console.log(newLib.isItPhoneNumber("206-661-0812"));

//Problem 5: Replace argument 2 with argument 3 within argument 1.
console.log(newLib.sepReplace("a,b,c", ",", "/"));

//Problem 6: Here is your new fixed decimal number
console.log(newLib.fixedDecimals(3.14159, 3));

//Problem 9: Here is your string as a number data type
console.log(newLib.stringToNum("42"));




















































