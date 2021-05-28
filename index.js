/* [ [ [ [ ]  ] ] ] ], multi dimensional Arrays, has more levels for storage, Array has been stored in another Array */


let myArray = [["value1", "value2", "value3"], ["value4", "value5", "value6"]];

/* you see myArray has 2 values, that is 2 sub Arrays. This means myArray[0] wil return first sub Array value [value1, value2, value3], while myArray[1] will return the second sub array [value4, value5, value6] */

/* each sub array has three values, if we want to select itemsinthe subArrays, then we need to add 1 more set of brackets with an index as shown in the example below */

console.log(myArray[0]);

let twoDimensionalArray = [["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]];

console.log(twoDimensionalArray);
console.log(twoDimensionalArray[0][2]);

let multiDimentionalArray = [1, 2, 3, 4,[5, 6,[7, 8,[9, 10, 11, 12]]]];
console.log(multiDimentionalArray);

let dimensionalArray = multiDimentionalArray [4][2][2][0];

console.log(dimensionalArray);