// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.

// const arr1 = [3, 9, 15, 4, 10]

// const multiplyBy10 = arr1.map((value) => {
//     return value * 10
// })

// console.log(multiplyBy10)

// output: [30, 90, 150, 40, 100]

// const multipliedBy10 = arr1.map(value => value * 10)



// console.log(multipliedBy10)


// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.

// const arr1 = [3, 9, 15, 4, 10]

// const dividedBy2 = arr1.map((value) => {
//     return value / 2
// })
// console.log(dividedBy2)
// output: [1.5, 4.5, 7.5, 2, 5]

// Create a function that takes in an array of numbers and returns an array with only odd numbers.

// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]

// const oddNums = arr2.filter((value) => {
//     return value % 2 !== 0
// })

// console.log(oddNums)
// output: [7, 3, 5, 13, -9]


// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

// const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"

// const pumbaaSplit = pumbaa.split(" ")

// const oddCharacter = pumbaaSplit.filter((value) => {
//     if (value.length % 2 !== 0)
//     return value
// })

// console.log(oddCharacter)
// // output: ["a", "wonderful", "ain't", "passing", "craze"]


// // Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// const onlyLetters = comboArr.filter((value) => {
//     if (typeof value === "string")
//     return value
// })

// console.log(onlyLetters.join(""))
// // output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

// const filterArray = filterArrayValues.filter((value) => {
//     return !!value === false || !!value === false
// })
// console.log(filterArray)

// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

// const everyOtherCaps = (arr) => {
//     // 
//      let lettersArray = arr
//         .join(" ") //create one string
//         .split("") // separate into individ chars
    
//       return lettersArray
//         .map((letter, index) => {
//           if (index % 2 !== 0) {
//             return letter.toUpperCase()
//           } else if (index % 2 === 0) {
//             return letter
//           }
//         })
//         .join("")
//         .split(" ")
//     }
//     console.log(everyOtherCaps(makesWackyWords))

    // Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// output: "jvscrpt s wsm"

// const removeVowels = (vowels)=> {
//     const splitStr = vowels.split("")
//     const onlyVowels = ["a", "e", "i", "o", "u"]
//     const noVowels = splitStr.filter((letters) => {
//     }) return !onlyVowels.includes(letters)
//     }
// console.log(removeVowels)

const removeVowels = (inputString) => {
    const vowels = "aeiou"
    return inputString.split('').filter(char => !vowels.includes(char)).join('');
  }
//   const result = removeVowels(str);
  console.log(removeVowels(str)); // Output: "jvscrpt s wsm"

  