// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// const multiplier = (array) => {
//     return array.map((value) => value * 10)
// }
// console.log(multiplier(arr1))
// // output: [30, 90, 150, 40, 100]

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]
// const division = (array) => {
//     return array.map((value) => value / 2)
// }
// console.log(division(arr1))
// // output: [1.5, 4.5, 7.5, 2, 5]

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// const oddNum = (array) => {
//     return array.filter((value) => value % 2 !== 0)
// }
// console.log(oddNum(arr2))
// // output: [7, 3, 5, 13, -9]

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
// const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// const arr1 = pumbaa.split(" ")
// console.log(arr1)
// const oddChar = (array) => {
//     return array.filter((value) => {
//         return value.length % 2 !==0
//     })
// }
// console.log(oddChar(arr1))
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// const letter = (array) => {
//     return array.filter((value) => {
//         return typeof value == "string"
//     })
// }
// console.log(letter(comboArr))
// let niceWork = letter(comboArr)
// console.log(niceWork.join(""))
// // // output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// const posVal = (array) => {
//         return array.filter(Boolean)
// }
// console.log(posVal(filterArrayValues))
// output: [58, "abcd", true]

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// Psuedo code: 
// capitalize each value at the odd index
// return value to uppercase
// return odd index
// const capitalLetter = (array) => {
//     for (let i=0; i < array.length; i+=2){
//         if (array[i] % 2 !== 0)
//      return array[i].toUpperCase}
//     }
// console.log(capitalLetter(makesWackyWords))



// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
const arr1 = str.
// // output: "jvscrpt s wsm"
// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"
// // output: [4, 5, 7, 4, 3, 2, 8]