// Coffee Maker: copy the given Coffee class into a text editor
// class Coffee {
//     constructor(type, cream, sugar) {
//       this.type = type.toLowerCase()
//       this.cream = cream
//       this.sugar = sugar
//     }
  
//     coffeeProfile() {
//       return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//     }
  
//     creams() {
//       if (this.cream > 1) {
//         return `${this.cream} creams`
//       } else {
//         return `${this.cream} cream`
//       }
//     }
  
//     sugars() {
//       if (this.sugar > 1) {
//         return `${this.sugar} sugars`
//       } else {
//         return `${this.sugar} sugar`
//       }
//     }
//   }
// // Write the code that makes a black coffee object
// const blackCoffee = new Coffee("black", 0, 0)


// // Write the code that outputs the black coffee's profile
// console.log(blackCoffee)
// // Write the code that makes a coffee object with 1 cream and 2 sugars
// const oneCreamTwoSugars = new Coffee("Coffee", 1, 2)
// // Write the code that outputs the 1 cream and 2 sugars coffee profile
// console.log(oneCreamTwoSugars)



// Latte Maker: create a class for Latte
// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
class Latte {
    constructor(flavor, milk, shots) {
        this.flavor = flavor
        this.milk = milk
        this.shots = shots
    }

latteProfile(drink) {
    return `This latte is a ${this.flavor} flavor, it is made with ${this.milk} and ${this.shots} shots.`
}
}   
// Write the code that makes a regular, single shot latte
const singleShot = new Latte("coconut", "2%", 1)

// Log the regular, single shot latte's profile
console.log (singleShot.latteProfile())

// Write the code that makes a double shot, hazelnut latte with almond milk.
const doubleShot = new Latte("hazlenut", "almond milk",2)
// Log the double shot, hazelnut latte with almond milk's profile.
console.log(doubleShot.latteProfile())
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
// Back to Syllabus