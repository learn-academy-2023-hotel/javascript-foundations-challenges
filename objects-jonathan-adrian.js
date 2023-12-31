// const person = {
//     firstName: "Arthur",
//     lastName: "Dent"
//   }
// //   Write the code that accesses the first name of the person object.
// console.log(person.firstName)
// //   Write the code that accesses the last name of the person object.
// console.log(person.lastName)
// //   Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
// person.homePlanet = ("Earth")
// console.log(person.homePlanet)
// //   Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(`${person.firstName} ${person.lastName} is from planet ${person.homePlanet}.`)


const product = {
    name: "chair",
    price: 24.99
  }
//   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
// function describeProduct(object){
//     console.log(`The product is a ${object.name}. It costs $${object.price}`)
// }
// describeProduct(product)

//   Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
// const totalWithTax = () => {
//     return((product.price * .07) + product.price)
// }
// console.log(totalWithTax(product))

// const lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"],
//     sandwhich: function returnIngredients()  {
//         return `The ingredients for a PB and Banana sandwhich are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
//     }
//   }
//   Write the code that accesses the ingredients property.

// console.log(lunch.ingredients)
// //   Write the code that access the third ingredient of the lunch object.
//  console.log(lunch.ingredients[2])
//   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// const returnIngredients = () => {
//     return `The ingredients for a PB and Banana sandwhich are ${lunch.ingredients[0]}, ${lunch.ingredients[1]}, and ${lunch.ingredients[2]}.`
// }
// console.log(returnIngredients(lunch))
//   Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// console.log(lunch.sandwhich())


const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]

// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

const onlyCats = animals.filter((value) => {
    return value.type === "cat"
})
console.log(onlyCats)

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

const getAllTheNames = animals.map((value) => {
  return value.name
})
console.log(getAllTheNames)

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

const olderThan10 = animals.filter((value) => {
  return value.age > 10
})
console.log(olderThan10)

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.