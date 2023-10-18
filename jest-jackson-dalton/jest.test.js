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