//We know that forEach goes through the array in forward direction. 
//In order to loop through an array backwards using forEach method, 
//we have to reverse the array. To a avoid modifying the original array, 
//first create copy of the array, reverse the copy, and then use forEach on it. 
//The array copy can be done using slicing or ES6 Spread operator.


var arr =  [1, 2, 3, 4, 5];
 
arr.slice().reverse()
    .forEach(function(item) {
            console.log(item);
        });
