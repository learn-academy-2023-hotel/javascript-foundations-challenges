// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

// Psuedo:
// input: array - const testArr1 = [3, 9, 15, 4, 10]
// output:new array with whole numbers that are multiplied by 3
// create a function that takes array as a parameter
// create a new array to hold information
// use a for loop to access each element; multiply each element by 3
// return the array with all the push in elements


const testArr1 = [3, 9, 15, 4, 10]

const newArray = (array) => {
    let = numArray = []
    for (let i=0; i < array.length; i++){
        numArray.push(array[i] * 3) 
    }
    return numArray
}

console.log(newArray(testArr1))

// // output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// pseudo: 
// input: array - const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: new array with odd numbers only 
// create a function that that gives us back only odd numbers
// create a new array to hold information 
// use a for loop to access each element 
// use a conditional statement to find each odd element
// return the array with all the push elements

const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const oddArray = (array) => {
    let onlyOdd = []
    for (let i=0; i < array.length; i++) {
        if (array[i] % 2 !== 0){
            onlyOdd.push(array[i])
        }
    }
    return onlyOdd
}

console.log(oddArray(testArr2))

// // output: [-7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.

// Pseudo:
// input: const comboArr =
// output: return a string 
// create a function that gives us back only a string 
// create a new array to hold the information 
// use a for loop to access each element 
// use a conditional statement to find each string element 
// return using .join to combine the array into a string



const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]

const stringArr = (array) => {
    let hiddenString = []
    for (let i=0; i<array.length; i++){
        if (typeof array[i] === typeof "dog"){
            hiddenString.push(array[i])
        }
    }
    return hiddenString.join('')
}

console.log(stringArr(comboArr))

// // output: "nicework"
// Create a function that takes in an array of numbers and returns the sum.

// pseudo:
// input: array
// output: sum of the array
// create a function that takes an array as a parameter 
// use a variable holding a new area 
// use a loop to access each element 
// add each element to the new variable
// return sum of the array 


const addThese1 = [1, 2, 3, 4]

const sumArray = (array) => {
    let sumNumbers = 0
    for(let i = 0 ; i < array.length; i++){
        array[i] += sumNumbers 
    }
    return sumNumbers
}

console.log(sumArray(addThese1))

// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1