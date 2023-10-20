// Classes Challenges 
// Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Coffee ("black", 0, 0) 
// console.log(blackCoffee)

// Write the code that outputs the black coffee's profile

// let blackCoffee = new Coffee ("black", 0, 0) 
// console.log(blackCoffee)
// console.log(blackCoffee.coffeeProfile())
// console.log(blackCoffee.coffeeProfile())

// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile
// let blackCoffee2 = new Coffee ("black", 1, 2) 
// console.log(blackCoffee2)
// console.log(blackCoffee2.coffeeProfile())


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

// Latte Maker: create a class for Latte
// class Latte {
//     constructor (flavor, milkType, numberOfShots) {
//         this.flavor = flavor 
//         this.milkType = milkType
//         this.numberOfShots = numberOfShots
//     }
//     latteProfile() {
//         return `This ${this.flavor} ${this.milkType} has ${this.numberOfShots} shots.`
//     }
// }
// let regularCoffee = new Latte("regular", "regular", "1")
// console.log(regularCoffee)

// let hazelNutLatte = new Latte ("hazelnut", "almond milk", 2)
// console.log(hazelNutLatte)
// console.log(hazelNutLatte.latteProfile())

// // Write a Latte class that takes a flavor, a milk type, and a number of shots
// // Write a method for your Latte class that outputs the latte's profile
// // Write the code that makes a regular, single shot latte
// // Log the regular, single shot latte's profile
// // Write the code that makes a double shot, hazelnut latte with almond milk.
// // Log the double shot, hazelnut latte with almond milk's profile.
// // Volume of a Cylinder: create a class for Cylinder

class Cylinder {
    constructor (radius, height) {
        this.radius = radius
        this.height = height
    }
    volume () {
        const volume1 = Math.PI * Math.pow(this.radius, 2) * this.height;
        return volume1.toFixed(4)
        // return Math.PI * Math.pow(this.radius, 2) * this.height
    }
}
let pie = new Cylinder (1, 8)
console.log(pie.volume()) // Returns: 25.132741228718345 // 25.1327
// const volume1 = pie.volume()
// console.log(volume1.toFixed(4))

// console.log(pie.volume.toFixed(4))

// // Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// // Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

let pie1 = new Cylinder (4, 6)
let pie2 = new Cylinder (8, 9)
console.log(pie2)
console.log(pie1)
console.log(pie)