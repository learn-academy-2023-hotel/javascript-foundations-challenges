// Jas Driver
const arr1 = [3, 9, 15, 4, 10]

// const arr10 = arr1.map((value) => {
//     return value * 10
// })
// console.log(arr10)
// output: [30, 90, 150, 40, 100] COMPLETE

// const arr2 = arr1.map((value) => {
//     return value / 2
// })
// console.log(arr2)
// output: [1.5, 4.5, 7.5, 2, 5] COMPLETE

// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]

// const oddArr = (arr2) => {
//     return arr2.map(value => {
//         if (value % 2 !== 0) {
//             return value
//         }
//     })
// }
// console.log(oddArr(arr2))
// // output: [7, 3, 5, 13, -9]

// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]

// const oddNums = (array) => {
//   return array.filter((value) => value % 2 !== 0)

// }
// console.log(oddNums(arr2)) //[ 7, 3, 5, 13, -9 ]

const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// output: ["a", "wonderful", "ain't", "passing", "craze"]

// const oddNumWord = pumbaa.split(" ")

// 
const oddNum = (array) => {
    return array.filter((value) => value % 2 !== 0)   
}
console.log(oddNum(pumbaa.split(" ".length)))

// [
//     'Hakuna',    'Matata',
//     'what',      'a',
//     'wonderful', 'phrase',
//     'Hakuna',    'Matata',
//     "ain't",     'no',
//     'passing',   'craze'
//   ]