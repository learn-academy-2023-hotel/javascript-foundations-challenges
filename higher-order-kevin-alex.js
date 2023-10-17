// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

// const multTen = (array) =>{
//     return array.map((value => value *10))
// }
// console.log(multTen(arr1))

//2
// const arr1 = [3, 9, 15, 4, 10]
// // output: [1.5, 4.5, 7.5, 2, 5]

// const divTwo = (array) => {
//     return array.map((value) => value /2)
// }
// console.log(divTwo(arr1))

//3
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]

// const onlyOdd = (array) => {
//     return array.filter((value) => value %2 !== 0)
// }
// console.log(onlyOdd(arr2))


//4
// const pumbaa =
//   "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // output: ["a", "wonderful", "ain't", "passing", "craze"]

// const oddChar = (array) => {
//     return (array.split(" ")).filter((value) => value.length%2 !== 0)
// }
// console.log(oddChar(pumbaa))


//5
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// const onlyString = (array) =>{
//     return (array.filter((value) => typeof value === "string")).join("")
// }
// console.log(onlyString(comboArr))


//6
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // // output: [58, "abcd", true]
// const someThing = (array) => {
//     return array.filter((value) => value)
// }
// console.log(someThing(filterArrayValues))


// 7
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

// const everyOther = (array) => {
//     return array.map((value) => value.slice(0,1) + (value.slice(1)).toUpperCase()
//     )
// }
// console.log(everyOther(makesWackyWords))


//8
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"

// const noVowels = (str) => {
//     return str.split("").filter((value) => {
//         return !("aeiou".includes(value))
//     }).join("")
// }
// console.log(noVowels(str))

// 9
// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.

// const stringOfNumbers = "4574328"

// const strToNum = (str) => {
//     return str.split("").map((value) => Number(value))
// }
// console.log(strToNum(stringOfNumbers))
// // // output: [4, 5, 7, 4, 3, 2, 8]

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]

const newArr = (arr1,arr2) => {
    return (arr1.concat(arr2)).filter((value, index) => arr1.concat(arr2).indexOf(value) === index)
}
console.log(newArr(arr1,arr2))
// output: [3, 7, 10, 5, 4, 8, 2, 1]

// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.


const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]

const firstStr = (array) => {
    return array.find((value) => typeof value === "string")
}
console.log(firstStr(allTheData))
// output: "yo!"