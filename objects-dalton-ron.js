// //Challenge-1
// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     homePlanet: "Earth",
//   }
// // console.log(person.firstName)

// const { object } = require("prop-types")

// // console.log(person.lastName)

// // console.log(person.firstName, person.lastName, "is from planet", person.homePlanet)

// //challenge-2

// const product = {
//     name: "chair",
//     price: 24.99
// }
//    const describeProduct = () =>   {
//     return `The product is a ${product.name} it cost ${product.price}`  
// }

// console.log(describeProduct())
const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"]
  }
//   console.log(lunch.ingredients.join(" ")) //bread peanut butter banana
//   console.log(lunch.ingredients[2]) //banana
const lunchRecipe = (lunchObject) => {
    return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients.join(" ")}`
}
console.log(lunchRecipe(lunch)) // The ingredients for a PB and Banana sandwich are bread peanut butter banana