// var fruits = ["apple", "banana", "orange"];

// // Write a function that outputs every fruit in a fruit array.

// function logArrayOld (array) {
// 	for (var i = 0; i < array.length; i++) {
// 		console.log(array[i]);
// 	};
// };

// logArrayOld(fruits);

// // Rewrite using forEach array method

// function logArrayNew (element, index) {
// 	console.log(element);
// 	console.log("array[" + index + "]" + element);
// }

// fruits.forEach(logArrayNew);

// //Write a function called backwardArrayOld that reverses the letters in each word in the fruit array

// function backwardsArrayOld(array) {
// 	var backwardsFruit = [];
// 	for (var i = 0; i < array.length; i++) {
// 		backwardsFruit.push(array[i].split("").reverse().join(""));
// 	}
// 	console.log(backwardsFruit);
// }

// backwardsArrayOld(fruits);

// //Rewrite it using map array method

// var backwardsArrayNew = fruits.map(function(fruit) {
// 	return fruit.split("").reverse().join("");
// });

// console.log(backwardsArrayNew)

// //Write a function called fiveLettersOnlyOld that only returns fruits that have 5 letters.

// function fiveLettersOnlyOld (array) {
// 	var filteredArray = [];
// 	for (var i = 0; i < array.length; i++) {
// 		if (array[i].length === 5) {
// 			filteredArray.push(array[i]);
// 		}
// 	}
// 	console.log(filteredArray);
// }

// fiveLettersOnlyOld(fruits);

// //Rewrite using filter array method

// function fiveLettersOnlyNew (array) {
// 	if (array.length === 5) {
// 		return array;
// 	}
// }
// var filteredFruits = fruits.filter(fiveLettersOnlyNew);
// console.log(filteredFruits);

// //Write a function called addOld that returns the sum of an array

// var nums = [4, 7, 1, 8, 29];

// function addOld (array) {
// 	var sum = 0;
// 	for (var i = 0; i < array.length; i++) {
// 		sum += array[i];
// 	}
// 	console.log(sum)
// }

// addOld(nums);

// //Rewrite it with reduce method

// var sumNew = nums.reduce(function(previousValue, currentValue, index) {
// 	console.log("current index " + index);
// 	return previousValue + currentValue;
// });
// console.log(sumNew);


// // Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// // 1.  Sort the numbers in descending order (10, 9, 8, 7, etc).
// // 2.  Remove any integers greater than 19.
// // 3.  Multiply each remaining number by 1.5 and then subtract 1.
// // 4.  Then output (either in the DOM or the console) the sum of all the resulting numbers.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


console.log(integers.sort(function(a, b){return b-a}).filter(function(x){return x < 19}).map(function(y){return(y * 1.5)-1}).reduce(function(i, j){ return (i + j)}));






