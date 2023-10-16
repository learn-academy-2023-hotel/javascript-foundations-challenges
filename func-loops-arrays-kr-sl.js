// const testArr1 = [3, 9, 15, 4, 10]

// const timesThree = (someArray) => {
//     let newArray =[]
//     for (let i = 0; i< someArray.length; i++){
//         newArray.push(testArr1[i] * 3)
//     }
//     return newArray    
// }
// console.log(timesThree(testArr1))


// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// const findOdd = (oldArray) => {
//     let newArray = []
//     for(let i = 0; i < oldArray.length; i++){
//         if (oldArray[i] % 2 !== 0){
//             newArray.push(oldArray[i])
//         }    
//     }
//     return newArray
// }
// console.log(findOdd(testArr2))


// const comboArr = [
//     7,
//     "n",
//     true,
//     "i",
//     "c",
//     10,
//     "e",
//     -388,
//     "w",
//     3,
//     "o",
//     0,
//     "r",
//     false,
//     "k"
//   ]

//   const onlyString = (array) => {
//     stringArray = []
//     for (let i = 0; i < array.length; i++){
//         if (typeof array[i] === "string"){
//             stringArray.push(array[i])
//         }
//     }
//     return stringArray.join("")
//   }

//   console.log(onlyString(comboArr))
  


// const addThese1 = [1, 2, 3, 4]
// // output: 10

// const addThese2 = []
// // output: 0

// const addNums = (array) => {
//     theSum = 0
//     if (array.length > 0){
//         for (let i = 0; i < array.length; i++){
//             theSum += array[i]
//         }
//     } else{
//         theSum = 0
//     }
//     return theSum
// }
// console.log(addNums(addThese2))


// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1

// const highNumber = (array) => {
//     highestNum = array[0]
//     for (let i = 1; i < array.length; i++){
//         if (highestNum < array[i]){
//             highestNum = array[i]
//         }
//     }
//     return highestNum
// }
// console.log(highNumber(indexHighestNumber))



// const nonDuplicat = (array1, array2) => {
//     var arr3 = (array1.concat(array2))
//     let comboArr = []
//     for (let i = 0; i < arr3.length; i++){
//         if (arr3[i] in comboArr){
//             continue
//         }else{
//             comboArr.push(arr3[i])
//         }
//     }
//     return comboArr
// }
//console.log(nonDuplicat(arr1, arr2))

// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]

// const nonDuplicat = (array1, array2) => {
//     comboArr = []
//     for (let i = 0; i < array1.length; i++){
//         if(array1[i] in comboArr){
//             continue
//         }else{
//             comboArr.push(array1[i])
//         }
//     }
//     for (let i = 0; i < array2.length; i++){
//         if(array2[i] in comboArr){
//             continue
//         }else{
//             comboArr.push(array2[i])
//         }
//     }
//    return comboArr     
// }
// console.log(nonDuplicat(arr1, arr2))

// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
// //const arr3 = arr1.concat(arr2)
// //console.log(arr3)

// const nonDup = (arr1, arr2) => {
//     arr4 = []
//     const arr3 = arr1.concat(arr2)
//     for (let i = 0; i < arr3.length; i++){
//         if (arr4.lastIndexOf(arr3[i]) === -1){
//             arr4.push(arr3[i])
//         }
//     }
//     return arr4
// }
// console.log(nonDup(arr1,arr2))

// const arrayLength = 6
// const arrayValue = 0
// output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]

// const someThing = (arrayLength, arrayValue) => {
//     newArray =[]
//     for (let i =0; i < arrayLength; i++){
//         newArray.push(arrayValue)
//     }
//     return newArray
// }
// console.log(someThing(arrayLength, arrayValue))

// const addUp1 = 10

// const sumOf = (addUp1) => {
//     counter = 0
//     for (let i = 0; i < (addUp1 +1); i++){
//         counter += i
//     }
//     return counter
// }
// console.log(sumOf(addUp1))
