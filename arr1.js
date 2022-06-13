console.log("We will see some array methods here");

let arr = [
  "Harry",
  "Rohan Das",
  "SkillF",
  "Sachin",
  "Ballubhai",
  "lovedu",
  "bappi",
  "appa",
];

//We can store all these methods in variables

arr.push("Shreyas"); // .push() adds element at the end of the array and will return the length of an array.
console.log(arr);

arr.unshift("Dadushet"); // unshift() adds element at the start of the array. It actually shifts the pre-existing elements one place right in the array And returns the length of an array.
console.log(arr);

let x = arr.pop(); // .pop() removes the last element af an array and returns a string as that last element removed....
console.log(arr);
console.log(x);

let y = arr.shift(); // .shift() removes the first element af an array and returns a 'string' as that last element removed  It actually shifts the pre-existing elements one place left in the array..
console.log(arr);
console.log(y);

arr[1] = 5;
console.log(arr);

//push and pop are much faster than shift and unshift as shift and unshift dose the shifting........



let removedElements = arr.splice(2, 2, "9para"); // .splice(2,2,'9para') will search for index 2(the first arguement), then starting from and including the index 2,it will remove two elements (the second arguement we provided) and then add the 9para (the third arguement) to the array. We can also use the two aguements. with first and second arguement, it will search the index of first arguement and and remove the n elements where n is the second arguement.
console.log(removedElements);
console.log(arr);



let arr1 = [1, 2, 3, 4, 5, 6, 7];
let slicedArr = arr1.slice(1, 5);
console.log(slicedArr);
const copiedArr = arr1.slice(); // .slice() method can be used to copy an array and selecting the range of an array.
console.log(copiedArr);
arr1.push(8, "second pushed item");
console.log(arr, copiedArr); // observe the outputs. Even if we push a new element in arr1, the changes will 'not' reflect in copiedArr even though an array is a referance datatype. Hence the slice() method can be used to completely copy an array as it returns a brand new array without referancing the old array which it has been copied from.......



let concatedArr = arr.concat(arr1);
console.log(concatedArr);
arr1.push("xxx"); // Observe the outputs. Even after pushing the the new element in arr1, it will not hamper the concatinated array even though the array being an referance datatype. Hence the concat() methd also returns a brand new array.
console.log(arr1);
console.log(concatedArr);



let arr3 = [
  "Harry",
  "Shreyas",
  "Rohan Das",
  "SkillF",
  "Shreyas",
  "Maximillian Shwarzchmuller",
];
console.log(arr3);
console.log(arr3.indexOf("Shreyas")); // indexOf() will search 'Shreyas' from the left and will return the index of first matching value (1).
console.log(arr3.lastIndexOf("Shreyas")); // indexOf() will search 'Shreyas' from the left and will return the index of last matching value (4).
// If there is no match found, it will not throw an error; it will return -1.
// indexOf() and lastIndexOf() will only work on primitive value as their arguments. Because if we pass an 'object' as an argument of indexOf() eg. indexOf({'key':'value'}), it will take that argument as a brand new object and not refering to the object in the array where we are trying to fetch index of.



// So as to find the object and index of an object in an array we can use the find() and findIndex() method
const personData = [
  { name: "Adolf Hitler" },
  { name: "Josef Stalin" },
  { name: "Winston Chirchill" },
  { name: "Franklin Delano Roosevelt" },
  { name: "Neville Chamberlain " },
];



let findObject = personData.find((person) => {
  return person.name === "Josef Stalin";
}); // find() method takes an anonymus function as its argument and returns the boolian value according to the condition we provide. If that boolian value gets true, it will return the first matching object fetched by find() method. Javascript will automatically call the find() method once you invoke the variable including it.
console.log(findObject);

findObject.name = "SkillF";

console.log(findObject, personData); // Notice in the output and keep in mind that find() method will just find our existing object in our array and will not return a brand new object.



let findIndexOfObject = personData.findIndex((person) => {
  return person.name === "Franklin Delano Roosevelt";
});
console.log(findIndexOfObject); // findIndex() method will return the index of the object in the array........

console.log(arr.includes("Dadushet"));

let prices = [10, 20, 8.5, 30, 40];
let taxedPrices = prices.map((price, index) => {
  return { index: index, taxedPrice: price * 1.18 };
}); // .map() method will map each element in our array and will perform the operation on it...
console.log(taxedPrices);




// Sorting and filtering an array.......

let unsortedArray = [10, 20, 8.5, 5.2, 15];
let sortedArray = unsortedArray.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});

let filteredArray = unsortedArray.filter(price => price > 9); // The arrow function really shined here so better use it wherever possible........
console.log(filteredArray)

// let filteredArray = unsortedArray.filter((price, index, prices) => {
//   return price > 9;
// }); 

// console.log(filteredArray)

console.log(sortedArray)

let reversedArray = sortedArray.reverse()
console.log(reversedArray)

// .sort() method will create a brand new array. 

//.sort() method treats the array elements as strings. For numeric or intiger elements, an anonymus function with sorting logic is needed as an argument of .sort() method

// .sort() function will automatically comapare and swap the array elements as per the sorting logic you write inside  the anonymus function which the sort() method takes as an arguement... So as to sort an array in descending order, just make tiny changes in logic (just toggle the '<' and '>' operators inslide the if-else ladder)

// unsortedArray.push(3.7)
// console.log(unsortedArray)



// .reduce() method - to reduce all array elements into one eg. addition of all the elements, etc.

let sum = 0;
unsortedArray.forEach(price => sum += price);
console.log(sum)

// OR the same above operation 

const sumOfElements = unsortedArray.reduce((previousValue, currentValue) =>  previousValue += currentValue, 0) // Here '0' is the initial value with which we want to start our iteration from. It will be assigned to 'previousValue' for the 'first' iteration. After performing the opration (expression in return statement) on all elements of the array, it will return the final 'reduced' value (addition of all the elements in our case).

console.log('reduced sum = ', sumOfElements)