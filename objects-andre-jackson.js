  // 1.Write the code that accesses the first name of the person object.

  // 2. Write the code that accesses the last name of the person object.

  // 3 Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

  //  Update the person object with a method that logs "Arthur Dent is from planet Earth".

//   const person = {
//     firstName: "Arthur",
//     lastName: " Dent",
//     homePlanet: "is from Earth",
//     addUp: function() {
//         return this.firstName + this.lastName + this.homePlanet
//     }
//   }
// console.log(person.addUp())

//   console.log(person.firstName) // Arthur\
//   console.log(person.lastName) //Dent




//   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".


const product = {
    name: "chair",
    price: 24.99
  }
// const describeProduct = (product) => {
//     return `The product is a ${product.name} its cost ` + product.price
// }
// console.log(describeProduct(product))


//   Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.


const totalWithTax = (product) => {
    const taxRate = 0.07
    const taxPrice = product.price * taxRate
    const total = taxPrice + product.price
    return total.toFixed(2)
}
// console.log(totalWithTax(product))

//------------------------------------------

//   Write the code that accesses the ingredients property.

//   Write the code that access the third ingredient of the lunch object.

//   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

//   Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// const lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"],
//     addUp: function() {
//                 const food = this.name + " " + this.type + " " + this.ingredients
//                 return `The ingredient for a ${food}` 
//             }
//           }
//  console.log(lunch.addUp())



//   console.log(lunch.ingredients) //[ 'bread', 'peanut butter', 'banana' ]

// console.log(lunch.ingredients[2])// banana

// const PbjSandwhich = (lunch) => {
//     return `The ingredients for a PB and Banana sandwhich are ${lunch}`
// }
//  console.log(PbjSandwhich(lunch.ingredients))




