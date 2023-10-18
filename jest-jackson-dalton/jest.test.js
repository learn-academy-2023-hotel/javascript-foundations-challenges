// // describe("functionName", () => {
// //         it("description of What this function is supposed to do", () => {
// //             expect(functionName()).toEqual("expected outcome")
// //         })
// //     })

//     // RED
//     // input: none
//     // output: "wassup, Hotel!"
  
//     // describe method that lists the name of the function
//     describe("greeter", () => {
//       // The "it" method is nested in the describe block and give a description of what the function should do (life hack: you could get this from the coding prompt)
//       it("returns a string that says Wassup, Hotel!", () => {
//           // the expect will invoke the function and compare the result to the predetermined output that is in the .toEqual()
//           expect(greeter()).toEqual("Wassup, Hotel!")
//       })
//     })  

//     const greeter = () => {
//         return "Wassup, Hotel!"
//     }
//     // output: ReferenceError: greeter is not defined --> GOOD FAILURE


// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

// describe("areYouTired", () => {
//     it("log drink coffee if you are tired or keep working if you are not", () => {
//         expect(areYouTired("yes")).toEqual("drink coffee")
//         expect(areYouTired("no")).toEqual("keep working")
//     })
//   })

//   const areYouTired = (string) => {
//     if(string === "yes"){
//         return "drink coffee"
//     } else if(string === "no"){
//         return "keep working"
//     } else {
//         return "you suck"
//     }
//   }

//   console.log(areYouTired)


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.

// describe("areYouStressed", () => {
//     it("log relax if you are stressed or keep going if you are not", () => {
//         expect(areYouStressed("yes")).toEqual("relax")
//         expect(areYouStressed("no")).toEqual("keep going")
//     })
//   })

  //output: ReferenceError: areYouStressed is not defined

//   const areYouStressed = (string) => {
//     if(string === "yes"){
//         return "relax"
//     } else if(string === "no"){
//         return "keep going"
//     } else {
//         return "you still suck"
//     }
//   }

//   console.log(areYouStressed)

  // output: pass


//   Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.

// describe("areYouInBudget", () => {
//     it("log in budget if price is lower than $300", () => {
//         expect(areYouInBudget("yes")).toEqual("Less than $300")
//         expect(areYouInBudget("no")).toEqual("Get more money")
//     })
//   })

// // ReferenceError: areYouInBudget is not defined

//   const areYouInBudget = (string) => {
//     if(string === "yes"){
//         return "Less than $300"
//     } else {
//         return "Get more money"
//     }
//   }

//   console.log(areYouInBudget)

// pass  


// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

describe("smallerOfTheTwo", () => {
    it("take in two numbers and return the smaller of the two", () => {
        expect(smallerOfTheTwo("yes")).toEqual("1")
        expect(smallerOfTheTwo("no")).toEqual("2")
    })
})

// output: ReferenceError: smallerOfTheTwo is not defined

const smaller = [1, 2]

const smallerOfTheTwo = (smaller) => {
    if(smaller === "yes"){
        return "1"
    } else {
        return "2"
    }
}

// output: pass