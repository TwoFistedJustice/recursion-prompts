/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
/*
* I: an integer
* O: also an integer
* C: input must be non-negative
* E: none
* */
var factorial = function(n) {
//  base case is when n counts down to zero
  if (n < 0) {
    return null;
  }
  if (n === 0) {
    return 1;
  } else {
    return (n * factorial(n - 1));
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
/*
* I: an array of integers
* O: an integer
* C: none
* E: Array empty - return 0
* */
var sum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  var copy = array.slice();
  return copy.pop() + sum(copy);
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
/*
* I: an array of integers
* O: an integer
* C: none
* E: array of zero len returns 0
* What this fn does: it checks the type of the last input member and either returns it and recurses the remainder
*  or it simply recurses the last member if it is an array
* Relationship btwn i/o:
* */
var arraySum = function(array) {
  if (array.length === 0) {
    return 0;
  }
  var copy = array.slice();
  var popped = copy.pop();

  if (Array.isArray(popped)) {
    return arraySum(popped) + arraySum(copy);
  } else {
    return popped + arraySum(copy);
  }
};

// 4. Check if a number is even.
/*
I: a integer
O: a bool
C: none
E: n is not an integer
What this fn does: recursively subtracts two from the absolute value of
                                  a number until 1, 0, or -1 is reached.
Relationship between inputs and outputs: if the input subtracts down by two
                               to 1 or -1 return false. If zero return true
*/
var isEven = function(n) {
  if (n < 0){
    n = Math.abs(n);
  }
  
  if ( n === 0) {
    return true;
  } else if (n === 1 || n === -1) {
    return false;
  } else {
    return isEven(n-2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
/*
  I: an integer
  O: an integer
  C: sums from 0 to n, regardless of sign
  E: none
  What this function does: it sums up all integers between the input integer and zero
  Relationship between inputs and outputs: the output is the sum of all integers between itself
   and zero, NON inclusive.
* */
var sumBelow = function(n) {
  var isNegative = false;
  if (n < 0) {
    isNegative = true;
  }
  if (n === 1 || n === -1 || n === 0) {
    return 0;
  } else {
    return isNegative
      ? (n + 1) + sumBelow(n + 1)
      : (n - 1) + sumBelow(n - 1);
  }
  
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
/*
 I: two integers
 O: an array of the integers that exist between the two inputs - non-inclusive
 C: The integers must be different
 E: The inputs may be the same
 What this function does: it recursively finds the range of integers between the two outputs.
 Relationship between inputs and outputs: The inputs are the bookends of the output,
      the books are the numbers between the bookends.
* */
var range = function(x, y) {
  var xIsBigger = x > y ? true : false;
  
  if (x === y || !xIsBigger && x === y - 1  || xIsBigger && x - 1 === y) {
    return [];
  }
    if (xIsBigger) {
    return [x - 1].concat(range(x - 1, y));
  } else {
    return [x + 1].concat(range(x + 1, y));
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
/*
I: two integers, base and exponent
O: one integer
C: none
E: none
What this function does: It recursively calculates the exponent of the base
Relationship between inputs and outputs: the output is the base times itself exponent times
  In the case of a negative exponent it is one divided by the result.

* */
var exponent = function(base, exp) {
  
  if (exp === -1) {
    return 1 / base;
  } else if (exp === 1) {
    return base;
  } else if (exp === 2) {
    return base * base;
  } else if (exp === -2 ) {
    return 1 / (base * base);
  }
  
  var expIsNegative = exp < 0 ? true : false;
 
  return (exp !== 0 && expIsNegative)
     ? (1 / base ) * exponent( base, exp + 1).toFixed(5)
     : base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

/*
I: an integer
O: a boolena
C: none
E: none
What this function does: It determines whether an integer is a the
   result of the number 2 to the power of some exponent
Relationship between inputs and outputs: No direct relationship. If the number
   is a power of two, it return true and otherwise it returns false.
*/
var powerOfTwo = function(n) {
  if (n < 1) {
    return false;
  } else if (n === 1) {
    return true;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
/*
I: a string
O: a string
C: none
E: none
What this function does: It takes a string and returns a reversed copy
  including punctuation and spaces
Relationship between inputs and output: one is the reverse of the other
*/
var reverse = function(string) {
  var length = string.length;
  if (length <= 1) {
    return string;
  } else {
    var lastChar = string[length - 1];
    var truncatedString = string.slice(0, length - 1);
    return lastChar.concat(reverse(truncatedString));
  }
};

// 10. Write a function that determines if a string is a palindrome.
/*
I: a string
O: a boolean
C: none
E: none
What this function does: it checks to see if a string is the same forward as backwards
Relationship between inputs and outputs: it returns depending on if the string is a palindrome.
* */
var palindrome = function(string) {
  const length = string.length;
  if (length === 0) {
    return true;
  }
  // recursively check for a space - if char is a space, skip to the next one
  const getIndex = function(n, isFirst){
    const y = isFirst
      ? n + 1
      : n - 1;
    
    return string[n] !== ' '
      ? n
      : getIndex(y, isFirst);
  }
  
  const firstIndex = getIndex(0, true);
  const lastIndex = getIndex(length - 1, false);
  const firstChar = string[firstIndex].toLowerCase();
  const lastChar = string[lastIndex].toLowerCase();
  
  if (length <= 2) {
    return firstChar === lastChar;
  } else {
    return firstChar === lastChar
      ? palindrome (string.slice (firstIndex + 1, lastIndex))
      : false;
  }
};
// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

/*
 I: two integers
 O: one iteger
 C:If the abs value of x is less than y, return x
 E: none
 What this fn does: It recursively calculates the remainder after dividing one integer into another.
 Relationship betwixt inputs and outputs: The output is the whole number left over after dividing
   y into x.
* */
var modulo = function(x, y) {
  
  if (y === 0) {
    return NaN;
  } else if (x === y){
    return 0;
  }
  
  const xIsNegative = x < 0;
  const yIsNegative = y < 0;
  
  const xAbsVal = xIsNegative
    ? -x
    : x;
  
  const yAbsVal = yIsNegative
    ? -y
    : y;
  
  if (xAbsVal < yAbsVal) {
    return x;
  } else if (xIsNegative && !yIsNegative) {
    return modulo(x + y, y);
  } else {
    return modulo(x - y, y);
  }
};


// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
/*
 I: two numbers
 O: one number
 C: none
 E: none
 What this fn does: it recursively adds x to itself y times
 Relationship btwn inputs and outputs: The output is equal ot either number added
   to itself a number of times equal to the other number.
* */
var multiply = function(x, y) {
  const passX = y < 0
    ? -x
    : x;
  
  const passY = y < 0
    ? -y - 1
    : y - 1;
  
  if (y === 0) {
    return 0;
  } else {
    return passX + multiply (passX, passY);
  }
};


// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
/*
I: two integers
O: one integer
C: number must be an integer
E: no divide by zero
What this function does: It recursively divides the second arg into the first to arrive at
  an approximate quotient, discarding any decimal ending.
Relationship between inputs and outputs:
  The output is the whole number quotient of the second number divided into the first
*/
var divide = function (x, y) {
  if (y === 0){
    return NaN;
  } else if ( x === 0 || x < y){
    return 0;
  } else if (x === y) {
    return 1;
  } else if (x < 0 && y < 0) {
    return divide(-x, -y);
  } else {
    return 1 + divide(x - y, y);
  }
};


// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
/*
 I: two integers
 O: one integer
 C: no zeros
 E: none
 What this fn does: it recursively finds the greatest divisor of both numbers that doesn't have a remainder.
 Relationship betwn inputs and outputs: the output is a number that divides evenly into each input without any remainder.
* */

var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  
  if (y === 0) {
    return x;
  } else if (x === 0) {
    return y;
  } else {
    return gcd(y, x % y);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
/*
I: two strings
O: a bool
C: none
E: none
What this fn does: It recursively checks either end of each string to each other's and returns a bool
  the value of which depends upon the equality of the characters
Relationship btwn inputs & outputs: if the strings are equal the output is true, if they are not equal, then false

*/

var compareStrOLD = function(str1, str2) {
  var len = str1.length === str2.length
    ? str1.length
    : null;
  
  if (len === 0) {
    return true;
  } else {
    return (len !== null && str1[0] === str2[0] && str1[len - 1] && str2[len - 1])
      ? compareStr(str1.slice(1, len - 2), str2.slice(1, len - 2))
      : false;
    
  }
};


// var compareStr = function(str1, str2) {
//   if (str1 === '' & str2 === '') {
//     return true;
//   } else {
//     if (str1[0] === str2[0]) {
//       return compareStr(str1.slice(1, str1.length -1), str2.slice(1, str2.length -1) )
//     } else {
//       return false;
//     }
//   }
// };

var compareStr = function(str1, str2) {
  if (str1 === '' & str2 === '') {
    return true;
  } else {
    if (str1[0] === str2[0]) {
      return compareStr(str1.slice(1, str1.length), str2.slice(1, str2.length) )
    } else {
      return false;
    }
  }
};


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
/*
I: a string
O: an array of chars
C: none
E: none
What this fn does: it converts a string into an array of chars
Relationship btwn inputs and outputs: The output is an array representation of the input

*/
var createArray = function(str) {
  if (str.length === 0) {
    return [];
  } else {
    return [str[0]].concat(createArray(str.slice(1, str.length)));
  }
};

// 17. Reverse the order of an array\
/*
I: an array of unknown types
O: the same array in reverse order
C: none
E: none
What this function does: It recursively reverses the order of an array
Relationship btwn inputs and outputs: Essentially the same thing, just backwards

*/

var reverseArr = function(array) {
  if ( array.length === 0) {
    return [];
  } else {
    const lastIndex = array.length - 1;
    return [array[lastIndex]].concat(reverseArr(array.slice(0, lastIndex)));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
/*
 I: a value, a number
 O: an array
 C: value: of any type, length: must be a positive integer
 E: length can be zero,
 What this fn does: It creates an array filled with length members equal to value
 Relationship btwn inputs and outputs: the output is array consisting of of identical elements
   which are copies of the value. The length is the total number of elements
*/

var buildList = function(value, length) {
  if (length === 0) {
    return [];
  } else {
    return [value].concat(buildList(value, length - 1));
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
/*
I:a number
O: an array of strings
C: input must be a positive integer greater than zero
E: none
What this fn does: it creates an array of consecutive stringified numbers 1 to n, replacing
sole factors of 3 with the string "Fizz", sole factors of 5 with "Buzz", and
  factors of both 3 & 5 with "FizzBuzz:
  Relationship btwn inputs and outputs:
  the input determines the length the output array and the final value
*/

var fizzBuzz = function(n) {
  
  if (n <= 0) {
    return [];
  } else {
    let fizuz = null;
    if (n % 3 === 0 && n % 5 === 0 ) {
      fizuz = "FizzBuzz"
    } else if (n % 3 === 0 && n % 5 !== 0) {
      fizuz = "Fizz";
    } else if (n % 5 === 0 && n % 3 !== 0) {
      fizuz = "Buzz"
    } else {
      fizuz = n.toString();
    }
    
    return fizzBuzz(n - 1).concat(fizuz);
  }
};


// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
/*
I: an array
O: a number
C: none
E: list may be empty
What this fn does: It recursively counts the number of times a given value is stored in an array
Relationship btwn inputs and outputs: The output is the number of times the value occurs
*/

var countOccurrence = function(array, value) {
  
  if (array.length == 0) {
    return 0;
  } else {
    if (array[0] === value) {
      return 1 + countOccurrence(array.slice(1, array.length), value)
    } else {
      return countOccurrence(array.slice(1, array.length), value);
    }
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
/*
I:an array and a function that operates on the members of the array
O: a new array
C:
E:
What this fn does: It takes an array and a function. The function operates on every member consecutively
  and returns a new value, which is added to a new array, which is returned at the end
Relationship btwn inputs and outputs: The output is the result of the callback operating on the input array members
*/
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  }
  else {
    let len = array.length - 1;
    return rMap(array.slice(0, len), callback).concat(callback(array[len]));
  }
};


// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
/*
I: an object and a string
O: a number
C: none
E: none
What this fn does: It recursively counts the number of times an given string occurs as a key in an object
Relationship btwn inputs and outputs: The output is the number of times the key occurs.
*/
var countKeysInObj = function(obj, key) {
  var count = 0;
  
  for (var item in obj) {
    if (item === key) {
      count++;
    }
    if (typeof(obj[item]) === 'object') {
      count += countKeysInObj(obj[item], key);
    }
  }
  
  return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

/*
I: and object and a value
O: a number
C: none
E: none
What this fn does: It recursively counts the number of times an object contains a given value, including in nested objects
Relationship btwn inputs and outputs: The output is the number of times the given value occurs
*/

var countValuesInObj = function(obj, value) {
  var count = 0;
  
  for (var val in obj) {
    if (obj[val] === value) {
      count++;
    } else if (typeof(obj[val]) === 'object') {
      count += countValuesInObj(obj[val], value);
    }
  }
  
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.


/*
I: an object, a string, and another string
O: an object
C: none
E: none
What this fn does: It recursively changes in an object every given key with a new value
Relationship btwn inputs and outputs: The output is either a copy of the input obj or the
  same object with any key matching 'oldKey' with the value of 'newKey'
*/
var replaceKeysInObj = function(obj, oldKey, newKey) {
  
  for (var key in obj) {
    let value = obj[key];
    if (typeof(value) === 'object') {
      value = replaceKeysInObj(value, oldKey, newKey);
    }
    
    if (key === oldKey) {
      obj[newKey] = value;
      delete obj[oldKey];
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
/*
I: a number
O: an array
C: number must be greater than zero
E: none
What this fn does: it recursively builds an array filled with n quantity of fibonacci numbers beginning with 0
Relationship btwn inputs and outputs: The output is an array of length n (input)
*/
var fibonacci = function(n) {
  if (n <= 0) {
    return null;
  }
  if (n === 1) {
    return [0 , 1];
  } else {
      var fibos = fibonacci(n - 1);
      var len = fibos.length;
      var sum = fibos[len -1] + fibos[len -2];
      fibos.push(sum)
      return fibos;
  }
};


// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
/*
I: a number
O: a number
C: input must be an integer greater than zero
E: none
What this fn does: It recursively calculates the last fibonacci number in a sequence of n fibonacci numbers
Relationship btwn inputs and outputs: The input indicates the end position in the fibonacci sequence,
  the output is the fibonacci number at that location.
*/

var nthFibo = function(n) {
  if (n < 0) {
    return null;
  } else if (n === 0) {
    return 0;
  } else if (n ===1){
    return 1;
  } else {
    return nthFibo(n - 1) + nthFibo(n -2);
  }
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
/*
I: an array of strings
O: an array of strings
C: none
E: empty array
What this fn does: It recursively changes all the characters to uppercase in each word contained in an array
Relationship btwn inputs and outputs: The output array is a copy of the input array, but with each word in all caps.
*/

var capitalizeWords = function(array) {
  
  if (array.length === 0) {
    return [];
  } else {
    var lastElement = array.length - 1;
    var allCaps = array[lastElement].toUpperCase();
    return capitalizeWords(array.slice(0, lastElement)).concat(allCaps)
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
/*
I: an array of strings
O: an array of strings
C: strings must be characters a-z
E: empty array
What this fn does:
Relationship btwn inputs and outputs:
*/
var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    var word = array[0];
    var str = word[0].toUpperCase();
    if (word.length > 1){
      str += word.substring(1, word.length);
    }
    return [str].concat (capitalizeFirst (array.slice (1, array.length)));
  }
}


// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10

/*
I: an object (hash table)
O: a number (integer)
C: none
E: there may be no numbers present
What this fn does: It recursively searches a nested object for even numbers
   and returns the sum of the found even numbers.
Relationship btwn inputs and outputs: The output is the sum of the even numbers found in the nested object.
*/

var nestedEvenSum = function(obj) {
  var sum = 0;
  
  for (var prop in obj) {
    if (typeof obj[prop] === 'object') {
      sum += nestedEvenSum(obj[prop]);
    } else if (typeof obj[prop] === 'number' && obj[prop] %2 === 0) {
      sum += obj[prop];
    } else {
      sum += 0;
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
/*
I: an arry of arrays
O: an array of numbers
C: none
E: none
What this fn does: It recursively extracts the elements of sub arrays and consolidates them in a single one level array
Relationship btwn inputs and outputs: The output is an array of all the elements contained in the nested input
*/

var flatten = function(array) {
  var output = [];
  for (let i = 0; i < array.length; i ++) {
    let el = array[i];
    if (Array.isArray(el)) {
      output = output.concat(flatten(el));
      
    } else {
      output.push(el);
    }
  }
  return output;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
/*
I: a string
O: and object
C: none
E: empty string
What this fn does: It recursively counts the characters in an input string and returns the counts in an object
Relationship btwn inputs and outputs: The keys in the output object are the unique character values in the input
  string,the values are the the number of times each character occurs in the string.
  
*/
var letterTally = function(str, obj) {
  
  obj = obj || {};
  if (str.length === 0) {
    return obj;
  } else {
    let char = str[0];
    obj[char] !== undefined
      ? obj[char]++
      : obj[char] = 1;
    
    return letterTally(str.substring(1, str.length), obj);
  }
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]

/*
I: an array
O: a modified copy of the original array
C: array should not be empty
E: empty array
What this fn does: It recursively removes all but one repeated value when the values occur in contiguous positions
Relationship btwn inputs and outputs: The output array is a copy of the original with consecutive duplicates filtered out
*/

var compress = function(list) {
  for (let i = 0; i < list.length; i++) {
    let el = list[i];
    let nextEl = list[i + 1];
    if (i === list.length - 1) {
      return list;
    } else if (el === nextEl) {
      let firstPart = list.slice(0, i);
      let lastPart = list.slice(i + 1, list.length);
      let newList = firstPart.concat(lastPart);
      return compress(newList);
    }
  }
};


// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
