const person = {
    firstName: "Arthur",
    lastName: "Dent"
  }

console.log(person.firstName)
console.log(person.lastName)

person["homePlanet"] = "earth"
console.log(person.homePlanet)

person["whereIs"] = function () {
    return `${person.firstName} ${person.lastName} is from planet ${person.homePlanet}` 
}
console.log(person.whereIs())

//   Write the code that accesses the first name of the person object.
//   Write the code that accesses the last name of the person object.
//   Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
//   Update the person object with a method that logs "Arthur Dent is from planet Earth".


const product = {
    name: "chair",
    price: 24.99
  }

const describeProduct = (productObject) => {
console.log(` the product is a ${productObject.name}. It costs ${productObject.price}`)
}

describeProduct(product)

//   Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".


const totalWithTax = (productObject) => {
    const totalPrice = product.price * 1.07 
    return Math.round(totalPrice * 100) / 100
}

console.log(totalWithTax(product))


//   Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

const lunch = {
    name: "PB and Banana",
    type: "sandwich",
    ingredients: ["bread", "peanut butter", "banana"]
  }

//   Write the code that accesses the ingredients property.
console.log(lunch.ingredients)

//   Write the code that access the third ingredient of the lunch object.

console.log(lunch.ingredients[lunch.ingredients.length -1])
//   Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

const food = (lunch) => {
    var sentence = `The ingredients for a ${lunch.name} ${lunch.type} are` 
    for (let i = 0; i < lunch.ingredients.length; i++) {
        if (i === lunch.ingredients.length - 1) {
            sentence += ` ${lunch.ingredients[i]}.`
        } else {
            sentence += ` ${lunch.ingredients[i]},`
        }
    }
    return sentence
}

console.log(food(lunch))
//   Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."










