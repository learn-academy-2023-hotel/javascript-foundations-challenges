// // Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// const testArr1 = [3, 9, 15, 4, 10]
// let newArr = []
// const triple = (array) => {
//     for (let i=0; i < array.length; i++){
//         newArr.push(array[i] * 3)
//     }
//     return newArr
// }
// console.log(triple(testArr1))

// // output: [9, 27, 45, 12, 30]
// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// let newArr = []
// const oddNum = (array) => {
//     for (let i=0; i < array.length; i++){
//         if (array[i] % 2 !== 0){
//             newArr.push(array[i])
//         }
//     }
//     return newArr
// }
// console.log(oddNum(testArr2))

// // output: [-7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// const comboArr = [
//   7,
//   "n",
//   true,
//   "i",
//   "c",
//   10,
//   "e",
//   -388,
//   "w",
//   3,
//   "o",
//   0,
//   "r",
//   false,
//   "k"
// ]
// let newArr = []
// const onlyNum = (array) => {
//     for (let i=0; i <array.length; i++) {
//         if (typeof array[i] == "string" ){
//             newArr.push(array[i])
//         }
//     }    
//     return newArr

// }

// console.log(onlyNum(comboArr).join(""))



// // output: "nicework"






// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// let newArr = []
// let sum = 0
// const addNum = (array) => {
//     for( let i=0 ; i <array.length; i++){
//         sum += array[i]
//     }
//     return sum
// }
// console.log(addNum(addThese1))

// output: 10


// output: 0
// const addThese2 = []
// let newArr = []
// let sum = 0
// const addNum = (array) => {
//     for( let i=0 ; i <array.length; i++){
//         sum += array[i]
//     }
//     return sum
// }
// console.log(addNum(addThese2))







// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
let bigNum = []
const largeNum = (array) => {
    for (let i=0; i < array.length; i++) {
        if (array[i] > bigNum) {
           bigNum = array[i] 
        }
    }
    return array.indexOf(bigNum)
}

console.log(largeNum(indexHighestNumber))











// // output: 1