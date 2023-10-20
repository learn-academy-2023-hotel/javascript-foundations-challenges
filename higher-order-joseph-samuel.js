// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

//input:ar array of numbers
//output: a new array with the same length but with every element from the old array times ten OR old aray times 10 map into new array
//pseudocode: 
// 1. need to establish a hof using.map
// 2. interate every element in the old array 
// 3. multiply them by 10 and return them in a new array 

// const multiplyByTen = arr1.map((value) =>{
//     return value * 10
// })
// console.log(multiplyByTen)



// // Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [1.5, 4.5, 7.5, 2, 5]

// const dividedBy = arr1.map((value) => { //here is we set the parameter in which my function should run using .map to pull from the old array and put into a new array
//     return value / 2 // for every value at the index divide by 2 

// })
// console.log(dividedBy)

// // Create a function that takes in an array of numbers and returns an array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]

// const returnOddOnly = arr2.filter ((value) => {          //use .filter() when trying to if else commands 
//     return value % 2 !==0                  
     
// })

// // Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

const pumbaa =
  "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze" 
// output: ["a", "wonderful", "ain't", "passing", "craze"]

const stringA = "we have been working on this problem for a long time"

const newArray = (string) =>{     // here, we set up a function that takes a string as a parameter
    return string.split(" ").filter((value) =>{  // in the first function, we used splict("space") to turn every word in the string into an array with each word as an element. And then we .filer() the new array 
        return value.length % 2 !==0 // we used the .length% 2 !== 0 to set the condition for the filter() OR here we find the reminder of the value, comes back or even. because we set the reminder to be not zero, it would find the values that are odd
    })}
  console.log(newArray(pumbaa)) 
console.log(newArray(stringA))
//   output: ["a", "wonderful", "ain't", "passing", "craze"]

// const newArray = pumbaa.split(" ").filter((value) =>{
//         return value.length % 2 !==0
//     })
//   console.log(newArray) 


// pseudocode?
//.fitler()
// .lenghth % 2 !== 0  

// const stringNum = pumbaa.filter((string) => {
//     return string % 2 !==0
// })
// console.log(stringNum) 
// output: TypeError: pumbaa.filter is not a function

// const stringNum = pumbaa.filter((string) => {
//     return string.length % 2 !==0
// })
// console.log(stringNum) 
// output -->TypeError: array.filter is not a function


// const stringNum = (array) => {
//     return array.filter((value) => value.length % 2 !==0)
// }
// console.log(stringNum(pumbaa)) 

// const stringNum = (array) => {
//     return array.filter((value) => value.length % 2 !==0)
// }
// console.log(stringNum(pumbaa)) 

// const newArray = (array) => {
//     array.split()
//    let stringNum = (array) => {
//    return array.filter((value) => value.length % 2 !==0)
// }
// } 
// console.log(newArray(pumbaa)) 

// const newArray = pumbaa.split("").filter((value) =>{
//     return value.length % 2 !==0
// })
//   console.log(newArray) 

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// input: an array 
//...array --> string
//...
// output: string 

// const letterOnly = (array) => {
//     return array.filter((value) => {
//         return typeof value === "string"
//     } )
// }
// console.log(comboArr)

// const newArray= []
const letterOnly = (array) => {
    return  array.filter((value) => {
        return typeof value === "string"
    } )
}
console.log(comboArr)