// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]

//create fxn that calls array above
// const arrTen = arr1.map((value) => {
//     return value * 10
// })
// console.log(arrTen)
// // output: [30, 90, 150, 40, 100]


// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]

// const arr2 = arr1.map((value) => {
//     return value / 2
// })
// console.log(arr2)
// // output: [1.5, 4.5, 7.5, 2, 5]


// Create a function that takes in an array of numbers and returns an array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]

// const oddArr = arr2.map((value) => {       //worked but output was: [ undefined, 7, 3, 5, undefined, undefined, 13, -9 ]
//     if (value % 2 !== 0) {
//         return value
//     }
// })

// const searchOdd = arr2.filter (value => {
//     return value % 2 !== 0
// })
// console.log(searchOdd)
// // output: [7, 3, 5, 13, -9]



// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"



stringToArr = pumbaa.split(" ")

    const oddPum = stringToArr.filter(value => value.length % 2 !== 0)
        
console.log(oddPum)
// // output: ["a", "wonderful", "ain't", "passing", "craze"]


// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]


// const stringLet = arrToString.filter(value => {
//     return 
// })

const arraytoString = comboArr 
const letterStr = comboArr.filter (value => {
    return typeof(value) === "string"
})
console.log(letterStr.join(""))



// output: "nicework"







// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"
// // output: [4, 5, 7, 4, 3, 2, 8]