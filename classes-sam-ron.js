// Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
// Write the code that outputs the black coffee's profile
// Write the code that makes a coffee object with 1 cream and 2 sugars
// Write the code that outputs the 1 cream and 2 sugars coffee profile

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

//   let blackCoffee = new Coffee("Hazulnut", "almond", "splenda")
//   console.log(blackCoffee) //Coffee { type: 'hazelnut', cream: 'almond', sugar: 'splenda' }

//   let blackCoffee = new Coffee("HazelNut", 1, 2)
//   console.log(blackCoffee) // Coffee { type: 'hazelnut', cream: 1, sugar: 2 }

// let blackCoffee = new Coffee("Hazulnut", "almond", "splenda")
// console.log(blackCoffee.coffeeProfile()) //A hazulnut coffee with almond cream, splenda sugar

// let blackCoffee = new Coffee("hazelnut", 1, "almond", 2, "splenda")
// console.log(blackCoffee.coffeeProfile()) // A hazelnut coffee with 1 cream, almond sugar

let blackCoffee = new Coffee("hazelnut", "almond", "splenda")
console.log(`A ${blackCoffee.this.type} coffee with 1 ${this.cream} and 2 ${this.sugar}.`)


// A undefined coffee with 1 undefined and 2 undefined.