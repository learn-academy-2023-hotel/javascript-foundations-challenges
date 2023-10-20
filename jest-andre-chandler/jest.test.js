// describe("greeter", () => {
//     it("returns a generic greeting", () => {
//       expect(greeter()).toEqual("Hello, LEARN student!")
//     })
//   })

// const { number } = require("yargs")

//Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
//Create the function that will make the test pass.

// Pseudo code:
// 1. create a string that returns "drink coffee"
// 2. using the (it) return "keep working" as a string

//  describe("drinkCoffee", () => {
//      it("will log are you tired or not tired", () => {
//        expect(drinkCoffee("yes")).toEqual("drink coffee")
//        expect(drinkCoffee("no")).toEqual("keep working")
//      })
//    })

//    const drinkCoffee = (string) => {
//     if(string === "yes"){
//         return "drink coffee"
//     }else if(string === "no"){
//         return "keep working"
//     }else{
//         return "oops something went wrong"
//     }
//     }





// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.


// Pseudo code:
// 1. create a function returns string "relax" if you are stressed
// 2. create a function that return "keep going" if not stressed


// describe("greeter", () => {
//         it("is school stressing you out", () => {
//           expect(greeter("yes")).toEqual("relax")
//           expect(greeter("no")).toEqual("keep going")
//         })
//       })
    
//       // define greeter

//       const greeter = (string) => {
//         if(string === "yes"){
//             return "relax"
//         }else if(string === "no"){
//             return "keep going"
//         }else{
//             return "something went wrong"
//         }
//       }

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.

// Pseudo code:
// 1. 
// 2.
// 3.


// describe("budget", () => {
//             it("is this in my price range", () => {
//               expect(budget("yes")).toEqual("in budget")
//               expect(budget("no")).toEqual("too poor")
//             })
//           })    
//           const budget = (string) => {
//             if(string === "yes"){
//                 return "in budget"
//             }else if(string === "no"){
//                 return "too poor"
//             }else{
//                 return "something went wrong"
//             }
//           }

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

// Pseudo code:
// 1. create an input that takes in 2 numbers
// 2. create a function that outputs smaller numnber

describe("numbers", () => {
    it("the smaller number is", () => {
      expect(numbers(number1,number2)).toEqual(3)
    })
  })    
  const number1 = 3
  const number2 = 10
  const numbers = () => {
  } 
  if(number1 > number2) {
    return number1
  }else{
    return number2
  }
 




 


// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass. 