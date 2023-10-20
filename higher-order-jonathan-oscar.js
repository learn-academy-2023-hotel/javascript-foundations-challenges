const arrOne = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]
// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
const multiplyBy10 = arrOne.map((value) => {
    return value * 10
})
console.log(multiplyBy10)


const arr1 = [3, 9, 15, 4, 10]
// output: [1.5, 4.5, 7.5, 2, 5]
// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
const divideBy2 = arr1.map((value) => {
    return value / 2
})
console.log(divideBy2)

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
// // output: [7, 3, 5, 13, -9]
const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
const oddNums = arr2.filter((value) => {
    return value % 2 !== 0
})
console.log(oddNums)

// // Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

    const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"

const oddWords2 = (string) => {
    return string.split(" ").filter((value) => {
        return value.length % 2 !== 0
    })
}
 console.log(oddWords2(pumbaa))


// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// output: "nicework"

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const lettersOnly = comboArr.filter((value) => {
    return typeof value === `string`
    
}).join('')

console.log(lettersOnly)

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// output: [58, "abcd", true]

const certainData = filterArrayValues.filter((value) => {
    return  value !== false && value !== null && value !== 0 && value !== "" 
})
console.log(certainData)

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
// const everyOtherLetter = makesWackyWords.map((value) => {
//     value.toUpperCase
// })


// // Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// output: "jvscrpt s wsm"
const noVowels = str.split("").filter((value) => {
return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value!== "u"
}).join('')
     
console.log(noVowels)
