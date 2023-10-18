// const person = {
//     firstName: "Arthur",
//     lastName: "Dent"
//   }
//   Write the code that accesses the first name of the person object.

// console.log(person.firstName)

// Write the code that accesses the last name of the person object.

// console.log(person.lastName)

// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// person.homePlanet = 'Earth'

// console.log(person.homePlanet)

// console.log(person)

// const person = {
//     firstName: "Arthur",
//     lastName: "Dent",
//     arthursHome: function () {
//         return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
//     }
//   }
// person.homePlanet = 'Earth'

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(person.arthursHome())

// const product = {
//     name: "chair",
//     price: 24.99
//   }
//   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// const describeProduct = (value) => {
//     return `The product is a ${value.name}. It costs ${value.price}.`
// }
// console.log(describeProduct(product))

// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// const product = {
//   name: "chair",
//   price: 24.99
// }
// const totalWithTax = (value) =>{
//   return (value.price * 1.07).toFixed(2)

// }
// console.log(totalWithTax(product))



// Write the code that accesses the ingredients property.
// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
// console.log(lunch.ingredients)

// Write the code that access the third ingredient of the lunch object.

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }

// console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"]
}

const lunchIngredient = (value) => {
  return `The ingredients for a ${value.name} ${value.type} are ${value.ingredients[0]}, ${value.ingredients[1]} and ${value.ingredients[2]}`
}
console.log(lunchIngredient(lunch))