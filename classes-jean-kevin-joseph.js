// Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile

 
// class Coffee {
// constructor(type, cream, sugar) {
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
// let blackCoffee = new Coffee ("black")
// console.log(blackCoffee.coffeeProfile())
// blackCoffee = new Coffee ("black",1,2)
// console.log(blackCoffee.coffeeProfile())



// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.


// class Latte {
//     constructor (flavor, type, shots) {
//         this.flavor = flavor
//         this.type = type
//         this.shots = shots
//     }
//     latteMaker (){
//         return `Can i get a ${this.type}, ${this.shots} ${this.flavor} latte`
//     }
// }
// let latte = new Latte ("regular", "single shot","vanilla")
// console.log(latte.latteMaker())
// latte = new Latte ("hazelnut", "almond milk", "double shot")
// console.log(latte.latteMaker())


























// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

class Cylinder {
    constructor(radius, height) {
        this.radius = radius
        this.height = height
    }
    cylinderVolume() {
        return Math.round(Math.PI * this.radius**2 * this.height *10000) / 10000
    } 
    cylinderVolume2() {
    return Math.round(Math.PI * this.radius**2 * this.height *1000) / 1000
}
}
let circleVolume = new Cylinder(5,6)
console.log(circleVolume.cylinderVolume())
let circleVolume2 = new Cylinder(9,14)
console.log(circleVolume2.cylinderVolume2())
let circleVolume3 = new Cylinder(3,11)
console.log(circleVolume3.cylinderVolume())
