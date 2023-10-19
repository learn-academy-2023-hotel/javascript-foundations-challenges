class Coffee {
    constructor(type, cream, sugar) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
    }
  
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
    }
  
    creams() {
      if (this.cream > 1) {
        return `${this.cream} creams`
      } else {
        return `${this.cream} cream`
      }
    }
  
    sugars() {
      if (this.sugar > 1) {
        return `${this.sugar} sugars`
      } else {
        return `${this.sugar} sugar`
      }
    }
  }

//Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object

// let myCoffee = new Coffee("black", 0, 0)
// console.log(myCoffee)
// output: Coffee { type: 'black', cream: 'no cream', sugar: 'no sugar' }

// Write the code that outputs the black coffee's profile

let myCoffee = new Coffee("black", 0, 0)
// console.log(myCoffee.coffeeProfile())
//output: A black coffee with 0 cream, 0 sugar

// Write the code that makes a coffee object with 1 cream and 2 sugars
let goodCoffee = new Coffee("black", 1, 2)
// console.log(goodCoffee)
//output: Coffee { type: 'black', cream: 1, sugar: 2 }
// Write the code that outputs the 1 cream and 2 sugars coffee profile

// console.log(goodCoffee.coffeeProfile())
//output: A black coffee with 1 cream, 2 sugars

// Latte Maker: create a class for Latte

class LatteMaker {
    constructor (flavor, milk, shot) {
        this.flavor = flavor
        this.milk = milk
        this.shot = shot
    }
    latteProfile() {
        return `A ${this.flavor} latte with ${this.milk} milk and ${this.shots()} of espresso`
    }

    shots() {
        if (this.shot > 1) {
            return `${this.shot} shots`
        } 
        else { 
            return `${this.shot} shot`
        }
    }
}
// let myLatte = new LatteMaker ("regular", "whole", 1)
// console.log(myLatte.latteProfile())
//output:A regular latte with whole milk and 1 shot of espresso

// Write a Latte class that takes a flavor, a milk type, and a number of shots
// Write a method for your Latte class that outputs the latte's profile
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// let myLatte = new LatteMaker ("hazelnut", "almond", 2)
// console.log(myLatte.latteProfile())
//output: A hazelnut latte with almond milk and 2 shots of espresso
// Log the double shot, hazelnut latte with almond milk's profile.

// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects

class Cylinder {
    constructor(radiusNum, heightNum) {
        this.radius = radiusNum
        this.height = heightNum
    }
    volume(){
        return (Math.PI * this.radius ** 2 * this.height).toFixed(4)
    }
}
let myCylinder = new Cylinder(2, 4)
console.log(myCylinder.volume())
//output: 50.2655