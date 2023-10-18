// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

// const areYouTired = (string) => {
//     if (string === "yes") {
//         return "drink coffee"
//     } else if (string === "no") {
//         return "keep working"
//     } else {
//         return "something went wrong"
//     } 
// }
// console.log(areYouTired("yes"))
// console.log(areYouTired("no"))
// console.log(areYouTired("maybe"))

// describe("areYouTired", () => {
//     it("returns drink coffee if you are tired and keep working if you are not tired.", () => {
//         expect(areYouTired("yes")).toEqual("drink coffee")
//         expect(areYouTired("no")).toEqual("keep working")
//         expect(areYouTired("maybe")).toEqual("something went wrong")
//     })
// })


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.

// const areYouStressed = (string) => {
//     if (string === "yes") {
//         return "relax"
//     } else if (string === "no") {
//         return "keep going"
//     } else {
//         return "something went wrong"
//     } 
// }
// console.log(areYouStressed("yes"))
// console.log(areYouStressed("no"))
// console.log(areYouStressed("maybe"))

// describe("areYouStressed", () => {
//     it("returns relax if you are stressed and keep going if you are not stressed.", () => {
//         expect(areYouStressed("yes")).toEqual("relax")
//         expect(areYouStressed("no")).toEqual("keep going")
//         expect(areYouStressed("maybe")).toEqual("something went wrong")
//     })
// })


// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.

// const inBudget = (price) => {
//     if (price < 300) {
//         return "in budget"
//     } else {
//         return "not in budget"
//     }
// }

// console.log(inBudget(200))
// console.log(inBudget(400))

// describe("inBudget", () => {
//     it("returns in budget if a price is lower than $300.", () => {
//         expect(inBudget(200)).toEqual("in budget")
//         expect(inBudget(400)).toEqual("not in budget")
//     })
// })

// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

// const numbers = [ 1, 2]
// const smallerNum = (nums) => {
//     let newNums = []
//     for (let i=0; i<nums.length; i++) {
//         if (nums[0] > nums[1]){
//             newNums.push(nums[0]) 
//     } else {
//         newNums.push(nums[1])
//     }
// }
// return newNums
// }
// console.log(smallerNum(numbers))
