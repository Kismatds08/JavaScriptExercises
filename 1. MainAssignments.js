//1.      node 1.\ mainassignments.js


//1. Write a JavaScript program to compare two objects to determine if 
//   the first one contains equivalent property values to the second one.

function isSamePW(object1, object2) {
    return object1.login === object2.login;  // checking if the both objects contain equivalent property values 
  }
  
  const password1 = {
    login: 1234
  };
  const password2 = {
    login: '1234'
  };
  const password3 = {
    login: '1234'
  };
  
  console.log(isSamePW(password1, password2)); //  false
  console.log(isSamePW(password2, password3)); //  true

  console.log("----------------------------------------------------------------------------------------")



//2.
//16. Write a JavaScript function that returns true if the provided predicate function returns true 
//for all elements in a collection, false otherwise

  const allElements = (ar, f = Boolean) => ar.every(f);
console.log(allElements([11, 12, 13], i => i > 10)); 
console.log(allElements([4, 2, 3], i => i < 1));

console.log("----------------------------------------------------------------------------------------")




//3.
//18. Write a JavaScript program to remove specified elements from the left of a given array of elements. 

var cars = ["Lambo", "Ferari", "Maseratti", "Bugati", "Maybach"];
var leftRemove = cars.slice(1);
console.log(leftRemove);

console.log("----------------------------------------------------------------------------------------")




//4.
// 19/ Write a JavaScript program to remove specified elements from the right of a given array of elements.

var cars = ["Lambo", "Ferari", "Maseratti", "Bugati", "Maybach"];
var rightRemove = cars.slice(-1);
console.log("Remove this car : " + rightRemove);

console.log("----------------------------------------------------------------------------------------")




//5.
//24. Write a JavaScript program to dcapitalize the first letter of a string.

var decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
console.log(decapitalize('Script'))


console.log("----------------------------------------------------------------------------------------")




//6.
// 33. Write a JavaScript program to get a random number in the specified range.
var randomNum = (min, max) => Math.random() * (max - min) + min;
console.log(randomNum(2, 10)); 

console.log("----------------------------------------------------------------------------------------")




//7.
//56. Write a JavaScript program to check whether all elements in a given array are equal or not.

      
function allEqual(arr) { 
    if(!arr.length) return true; 
    return arr.reduce(function(a, b) 
        {return (a === b)?a:(!b);}) === arr[0]; 
}         

console.log(allEqual(["GFG", "GFG", "GFG","GFG"]));
console.log(allEqual(["GFG", "GfG", "GFG","GFG"]));
  
console.log("----------------------------------------------------------------------------------------")




//8.
//94. Write a JavaScript program to move the specified amount of elements to the end of the array.

var move = (arr, move) => [...arr.slice(move), ...arr.slice(0, move)];
console.log(move(['a','b','c','d'], 2));
console.log(move([5,6,7,8,9], -2));

console.log("----------------------------------------------------------------------------------------")




//9.
//105. Write a JavaScript program that return true if the given value is a number, false otherwise.

var numberFinder = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
console.log(numberFinder('123'));
console.log(numberFinder('xyz'));

console.log("----------------------------------------------------------------------------------------")




//10.
//143. Write a JavaScript program to sort the characters of a string Alphabetically.

const sortString = str => [...str].sort((i, j) => i.localeCompare(j)).join('');

console.log(sortString('kismatdshrestha'));
console.log(sortString('courtney1904'));

console.log("----------------------------------------------------------------------------------------")


