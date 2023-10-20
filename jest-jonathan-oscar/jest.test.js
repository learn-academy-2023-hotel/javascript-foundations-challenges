// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("checkIfTired", () => {
    it("checks if user is tired, if they are tired it tells them to drink coffee.", () => {
        expect(checkIfTired("yes")).toEqual("drink coffee")
           expect(checkIfTired("no")).toEqual("keep working")
    })
})

// // Create the function that will make the test pass.
const checkIfTired = (string) => {
    if(string === "yes"){
        return "drink coffee"
    } else if (string === "no"){
        return "keep working"
    } else {
        return "oops something went wrong"
    }
}



// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("checkIfStressed", () => {
    it("checks if user is stressed. Tells them to relax if they are stressed", () => {
        expect(checkIfStressed("yes")).toEqual("relax")
        expect(checkIfStressed("no")).toEqual("keep going")
    })
 })
// Create the function that will make the test pass.
const checkIfStressed = (string) =>{
    if(string === "yes") {
        return "relax"
    } else if(string === "no"){
        return "keep going"
    } else {
        return "oops there was an error"
    }
}

// Write the test for a function that returns "in budget" if a price is lower than $300.
describe("checksBudget", () => {
    it("checks if something is in our budget", () => {
        expect(checksBudget(299)).toEqual("in budget")
        expect(checksBudget(300)).toEqual("not in budget")
    })
})
// Create the function that will make the test pass.
const checksBudget = (number) => {
    if(number < 300){
        return "in budget"
    } else if(number >= 300){
        return "not in budget"
    } else {
        return "oops something went wrong"
    }
}


// Write the test for a function that takes in two numbers and returns the smaller number.
describe("smallNum", () => {
    it("returns the smaller number", () => {
        const nums = smallNum(10, 7)
        const equalNums = (5, 5)
        expect(nums).toEqual(7)
        expect(equalNums).toEqual(5)

    })
})
// Create the function that will make the test pass.
const smallNum = (num1, num2) => {
   return Math.min(num1, num2)
    }
    
