// Coffee Maker: copy the given Coffee class into a text editor

// class Coffee {
//   constructor(type, cream, sugar) {
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile() {
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams() {
//     if (this.cream > 1) {
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars() {
//     if (this.sugar > 1) {
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }

// // Write the code that makes a black coffee object
// let blackCoffee = new Coffee("black", "no", "no")

// // Write the code that outputs the black coffee's profile
// console.log(blackCoffee)

// // Write the code that makes a coffee object with 1 cream and 2 sugars
// let blondeCoffee = new Coffee ("black", "1", "2")

// // Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(blondeCoffee)


// // Latte Maker: create a class for Latte

// class Latte {
//     constructor(flavorString, milkString, shotString) {
//         this.flavor = flavorString
//         this.milk = milkString
//         this.shots = shotString
//     }
//     myLatte () {
//         return `My ${this.flavor} has ${this.milkType} and only ${this.shots}.`
//     }
// }

// let firstOrder = new Latte("regular", "no", "single")
// console.log(firstOrder)

// let secondOrder = new Latte("hazelnut", "almond", "double")
// console.log(secondOrder)
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.


// Volume of a Cylinder: create a class for Cylinder

class Cylinder {
    constructor(radiusNumber, heightNumber) {
        this.radius = radiusNumber
        this.height = heightNumber
    }
    volume () {
        return Math.PI * this.radius ** 2 * this.height
    }
}

let firstVol = new Cylinder (2, 4)
// console.log(firstVol.volume().toFixed(4))

let cylOne = new Cylinder (1, 5)
let cylTwo = new Cylinder (3, 6)
let cylThree = new Cylinder (5, 10)
console.log(cylOne)
console.log(cylOne.volume().toFixed(4))
console.log(cylTwo)
console.log(cylTwo.volume().toFixed(4))
console.log(cylThree)
console.log(cylThree.volume().toFixed(4))
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects