// Testing with Jest Challenges 

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

// describe("tiredOrNotTired", () => {
//     it("that returns drink coffee if you are tired and keep working if you are not tired.", () => {
//         expect(tiredOrNotTired("yes")).toEqual("drink coffee")
//         expect(tiredOrNotTired("no")).toEqual("keep working")
//     })
// })

// const tiredOrNotTired = (string) => {
//     if(string === "yes"){
//       return "drink coffee"
//     } else if(string === "no"){
//       return "keep working"
//     }else{
//       return "oops something went wrong "
//     }
//   }
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// // Create the function that will make the test pass.
// describe("stressedOrNotStressed", () => {
//     it("returns relax if you are stressed and keep going if you are not stressed.", () => {
//         expect(stressedOrNotStressed("yes")).toEqual("relax")
//         expect(stressedOrNotStressed("no")).toEqual("keep going")
//     })
// })
// const stressedOrNotStressed = (string) => {
//     if(string === "yes"){
//       return "relax"
//     } else if(string === "no"){
//       return "keep going"
//     }else{
//       return "oops something went wrong "
//     }
//   }
// Write the test for a function that returns "in budget" if a price is lower than $300.
// // Create the function that will make the test pass.
// describe("orderTotal", () => {
//     it("returns in budget if a price is lower than $300.", () => {
//         expect(orderTotal(250)).toEqual("in budget")
//         expect(orderTotal(300)).toEqual("out of budget")
//     })
// })

// const orderTotal = (price) => {
//     if(price < 300) {
//         return "in budget" 
//         } else {
//                  return "out of budget"
//             }
// }
    
// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.
// describe("smallerNumber", () => {
//     it("takes in two numbers and returns the smaller number.", () => {
//         expect(smallerNumber(7, 3)).toEqual(3)
//     })
// })

// const smallerNumber = (num3, num2) => {
//     if( num3 > num2) {
//         return num2 
//     } else {
//         return num3
//     }
// }

// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
// describe("oddOrEven", () => {
//     it("takes in one numbers and returns whether the number is odd.", () => {
//         expect(oddOrEven(1)).toEqual("odd")
//     })
// })
// const oddOrEven = (num1) => {
//     if(num1 % 2 !== 0) {
//         return "odd"
//     } else {
//         return "even"
//     }
// }
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
// describe("fruitColors", () => {
//     it("takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape.", () => {
//         expect(fruitColors("banana")).toEqual("yellow")
//         expect(fruitColors("apple")).toEqual("red")
//         expect(fruitColors("grape")).toEqual("purple")
//     })
// })
// const fruitColors = (fruits) => {
//     if (fruits === "banana") {
//         return "yellow"
//     } else if  (fruits === "apple") {
//             return "red"
//     } else if (fruits === "grape") {
//         return "purple"
//     } else { 
//         return "something went wrong"
// }
// }
// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
// describe("rick", () => {
//     it("returns Morty", () => {
//         expect(rick()).toEqual("Morty")
//     } )
// })
// const rick = () => {
//     return "Morty"
// }
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
describe("greeter", (name) => {
    it("returns a greeting with that name to the screen.", () => {
        expect(greeter(name)).toEqual("Greetings, ${name}")
    })
})
const greeter = () => {
    return "Greetings, ${name}"
}


// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.

