//Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
    // const arr1 = [3, 9, 15, 4, 10]
    // const multipliedBy = arr1.map((value) => {
    //     return value * 10
    // })
// console.log(multipliedBy)
// output: [30, 90, 150, 40, 100]
//Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
    // const arr1 = [3, 9, 15, 4, 10]
    // const dividedBy = arr1.map((value) => {
    //     return value / 2 
    // })
    // console.log(dividedBy)
// output: [1.5, 4.5, 7.5, 2, 5]

//Create a function that takes in an array of numbers and returns an array with only odd numbers.
  // const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
  // const oddNumbers = (array) => {
  //   return array.filter((value) => value % 2 !== 0 )
  // }
  // console.log(oddNumbers(arr2))
// output: [7, 3, 5, 13, -9]

//Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
  //create a function that takes in a string

// need to turn a string into an array
// .filter array based on the following condition
  // word.length % 2 !== 0 

 const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
 const oddCharacters = (string) => {
    const myArray = string.split(" ")
    myArray.filter(value => {
      return value.length % 2 !== 0 
    })
  }
 console.log(oddCharacters(pumbaa))

// output: ["a", "wonderful", "ain't", "passing", "craze"]

//Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
//const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"