// Higher Order Functions Challenges

// // Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// const multiplyBy3 = arr1.map((value) => {
//     return value * 10
// } )
//     console.log(multiplyBy3)
// // output: [30, 90, 150, 40, 100]

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
// const arr1 = [3, 9, 15, 4, 10]
// const divBy2 = arr1.map((value) => value / 2)
// console.log(divBy2)
// // output: [1.5, 4.5, 7.5, 2, 5]


// Create a function that takes in an array of numbers and returns an array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
// const oddNums = arr2.filter((value) => {
//     return value % 2 !== 0
// })
// console.log(oddNums)
// // output: [7, 3, 5, 13, -9]



// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
// const pumbaa =
//   "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze";
//   const extractOddLengthWords = (inputString) => {
//     const words = inputString.split(" "); // Split the string into an array of words
//     const oddLengthWords = words.filter(word => word.length % 2 !== 0);
//     return oddLengthWords;
//   }
//   const result = extractOddLengthWords(pumbaa);
//   console.log(result);
//  output: [ 'a', 'wonderful', "ain't", 'passing', 'craze' ]




// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// const extractLetters = (arr) => { 
//     let letterString = ""; 
//     for (let i = 0; i < arr.length; i++)
//      { if (typeof arr[i] === "string") { letterString += arr[i]; } 
//         } return letterString; } 
//         const result = extractLetters(comboArr); 
//         console.log(result); 

// // output: "nicework"


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]

// const filterFalsyValues = (arr) => 
// { return arr.filter(value => { 
//    return value !== false && value !== null && value !== 0 && value !== ""; })
//  } 
//  const filteredArray = filterFalsyValues(filterArrayValues)
//   console.log(filteredArray)
// // output: [58, "abcd", true]



// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]

// const wackyWords = (arr) => { 
//     return arr.map(word => { 
//         let wackyWord = '' 
//         for (let i = 0; i < word.length; i++) { 
//             if (i % 2 === 1) { wackyWord += word[i].toUpperCase()
//         } else { wackyWord += word[i]; } } 
//             return wackyWord; }) 
// } 
//          const wackyWordArray = wackyWords(makesWackyWords)
//           console.log(wackyWordArray) 
         // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]


// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"

// const removeVowels = (inputString) => { 
//     const vowelRegex = /[aeiouAEIOU]/g
//     const stringWithoutVowels = inputString.replace(vowelRegex, '');
//      return stringWithoutVowels 
//     } 
//     const result = removeVowels(str)
//      console.log(result)



// // output: "jvscrpt s wsm"


// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"

// const convertStringToNumberArray = (inputString) => {
//      const charArray = inputString.split("")
//       const numberArray = charArray.map(char => Number(char))
//       return numberArray; 
// } 
//       const result = convertStringToNumberArray(stringOfNumbers)
//        console.log(result)


// // // output: [4, 5, 7, 4, 3, 2, 8]
