// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.

// const Arr1 = [3, 9, 15, 4, 10]
// const numResult = Arr1.map((value) => value * 10)
//     console.log(numResult)

// [ 30, 90, 150, 40, 100 ]

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.

// const Arr1 = [3, 9, 15, 4, 10]
// const numResult = Arr1.map((value) => value / 2)
//     console.log(numResult)

// [ 1.5, 4.5, 7.5, 2, 5 ]

// Create a function that takes in ana array of numbers and returns an array with only odd numbers.

// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]

// const numResult = arr2.filter((value) => {
//     return value % 2 !== 0
// })
//     console.log(numResult)

// [7, 3, 5, 13, -9]

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

// const pumbaa =
//   "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"

//   const getWordsdWithOddLength = (inputString) => {
//     const words = inputString.split(" ")

//     const oddLengthWords = words.filter(word => word.length % 2 !== 0)

//   return oddLengthWords
//   }
// const result = getWordsdWithOddLength(pumbaa)

// console.log(result)

  // output: ["a", "wonderful", "ain't", "passing", "craze"]

//  Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

const niceWork = (array) => {
  return array.filter((value) => {
    return typeof value === "string"
  }).join()
}
console.log(niceWork(comboArr))


// output: "nicework"