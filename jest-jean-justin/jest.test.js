// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// const { it } = require("node:test")
// const { describe } = require("yargs")

// describe("coffeeDrinker", () => {
//     it("it will log drink coffee if tired, keep working if not tired" , () => {
//         expect(coffeeDrinker("tired")).toEqual("drink coffee")
//         expect(coffeeDrinker("not tired")).toEqual("keep working")
//     })
// })

// // Create the function that will make the test pass.

// const coffeeDrinker = (sleepiness) => {
//     if ( sleepiness === "tired"){
//         return "drink coffee"
//     } else if (sleepiness === "not tired") {
//         return "keep working"
//     }
// }




// // Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

// describe("stressLevels", () => {
//     it("it will log relax if stressed and keep going if not stressed" , () => {
//         expect(stressLevels("stressed")).toEqual("relax")
//         expect(stressLevels("not stressed")).toEqual("keep going")
//     })
// })

// //output: ReferenceError: stressLevels is not defined
// // Create the function that will make the test pass.

// const stressLevels = (levels) => {
//     if(levels === "stressed"){
//         return "relax"
//     } else if (levels === "not stressed"){
//         return "keep going"
//     }

// }


// // Write the test for a function that returns "in budget" if a price is lower than $300.
// describe("budget", () => {
//     it("logs in budget if price lower than $300", () => {
//         expect(budget(299)).toEqual("in budget")
//     })
// })

// // ReferenceError: budget is not defined

// //  Create the function that will make the test pass.

// const budget = (price) => {
//     if (price < 300){
//         return "in budget" 
//     }
    
// }
// // Write the test for a function that takes in two numbers and returns the smaller number.

// describe("smallerNum", () => {
//     it("takes two numbers and returns the smaller number", () => {
//         expect(smallerNum(1,2)).toEqual(1)
//     })
// })





// // Create the function that will make the test pass.

// const smallerNum = (num1, num2) => {
//     if(num1 < num2){
//         return num1
//     } else {
//         return num2
//     }
// }




// Write the test for a function that takes in one numbers and returns whether the number is odd.

// describe("oddNum", () => {
//     it("takes one number and returns whether the number is odd", () => {
//         expect(oddNum(1)).toEqual("Your number is odd.")
//     })
// })

// //  ReferenceError: oddNum is not defined
// // Create the function that will make the test pass.

// const oddNum = (number) => {
//     if(number % 2 !== 0) {
//         return "Your number is odd."
//     }
// }

// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruitColor", () => {
    it("takes fruit and returns yellow if argument is banana, red if apple, purple if grape", () => {
        expect(fruitColor("banana")).toEqual("yellow")
        expect(fruitColor("apple")).toEqual("red")
        expect(fruitColor("grape")).toEqual("purple")
    })
})

// Output:    ReferenceError: fruitColor is not defined
// Create the function that will make the test pass.
const fruitColor = (fruit) => {
    if(fruit === "banana" ) {
        return "yellow"
    } else if (fruit === "apple") {
        return "red"
    } else if (fruit === "grape") {
        return "purple"
    }
}

// Write the test for a function called rick that returns "Morty".

describe("lastName", () => {
    it("returns Morty when rick is called", () => {
        expect(lastName("rick")).toEqual("Morty")
    })
})

//output  ReferenceError: lastName is not defined
// Create the function that will make the test pass.

const lastName = (name) => {
    if(name === "rick") {
        return "Morty"
    }
}


// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.

describe("greeter", () => {
    it("takes a name and returns a greeting with that name", () => {
        expect(greeter("Jean")).toEqual("Hello, Jean!")
    })
})
//Output: ReferenceError: greeter is not defined
// Create the function that will make the test pass.

const greeter = (name1) => {
    return `Hello, ${name1}!`
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe("oddOrEven", () => {
    it("takes a number and logs whether it is odd or even", () => {
        expect(oddOrEven(1)).toEqual("Odd")
        expect(oddOrEven(2)).toEqual("Even")
    })
})
//Output: ReferenceError: oddOrEven is not defined
// Create the function that will make the test pass.

const oddOrEven = (number) => {
    if(number % 2 === 0) {
        return "Even"
    } else if(number % 2 !== 0) {
        return "Odd"
    }
}

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () => {
    it("takes a number and returns the result of the number multipled by 2", () => {
        expect(doubler(4)).toEqual(8)
    })
})
//Output: ReferenceError: doubler is not defined
// Create the function that will make the test pass.

const doubler = (multiple) => {
    return multiple * 2 
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.



// Create the function that will make the test pass.


// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.