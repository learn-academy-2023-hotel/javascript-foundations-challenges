// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]

// const multiplyTen = arr1.map(numTen =>{
//     return numTen * 10
// })
// console.log(multiplyTen)
// const multiplyTen = arr1.map(numTen => numTen * 10)

// console.log(multiplyTen) // // output: [30, 90, 150, 40, 100]

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
//  const arr1 = [3, 9, 15, 4, 10]
// const divideTwo = arr1.map(numTwo => numTwo / 2)

//  console.log(divideTwo) // // output: [1.5, 4.5, 7.5, 2, 5]

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// const onlyOdd = arr2.filter(odds => odds % 2 !== 0 )

// console.log(onlyOdd) // // output: [7, 3, 5, 13, -9]

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
// const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// const oddWords = pumbaa.split(" ").filter(oddLetters => oddLetters.length %2 !== 0)
// console.log(oddWords)

// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// const onlyLet = comboArr.filter(numbers => typeof numbers == "string")

// console.log(onlyLet.join("")) // // output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// const takeAway = filterArrayValues.filter(falses => falses !== 0 && falses !== false && falses !== null && falses !== "")
// console.log(takeAway)// // output: [58, "abcd", true]


// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// Psudeo
// input: An Array
// output: An Array of strings with every other letter capitalized
// iterate through the array of strings (.map) ["simba", "nala", "zazu", "rafiki"]
// on each iteration we are going to take the value (string) and convert it to an array (.split()) - ["s", "i", "m", "b", "a"]
// take that new coverted array and iterate through it using .map
// determine whether the index of the letter is odd or even
//      if odd capatalize the letter (.toUpperCase())
//          else return the letter
// turn the array back into a string (.join(""))

// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// const capLetter = (array) => {
//     return array.map((value) => {
//         return value.split("").map((letter, index) => {
//             if (index % 2 !== 0){
//                 return letter.toUpperCase()
//             } else {
//                 return letter
//             }
//         }).join("")
//     })
// }
// console.log(capLetter(makesWackyWords)) // // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

// Create a function that takes in a string and returns a new string with all the vowels removed.
// Psuedo Code
// input = string "javascript is awesome"
// output = string with vowels removed
// creating a highorder function that will ret
const str = "javascript is awesome"
const vowelsRemoved = (array) => {
    return array.split(" ").map((vowels, index) => {
        if (index === "a") {
            return vowels[index]
        } else if (index === "e") {
            return vowels[index]
        } else if (index === "i") {
            return vowels[index]
        } else if (index === "o") {
            return vowels[index]
        } else if (index === "u") {
            return vowels[index]
        } else {

        }
    })


}
console.log(vowelsRemoved(str))

// // output: "jvscrpt s wsm"
// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
const stringOfNumbers = "4574328"


// // output: [4, 5, 7, 4, 3, 2, 8]