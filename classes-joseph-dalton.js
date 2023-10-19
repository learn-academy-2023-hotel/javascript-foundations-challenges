class Coffee {
    constructor(type, cream, sugar, creamNumber, sugarNumber) {
      this.type = type.toLowerCase()
      this.cream = cream
      this.sugar = sugar
      this.creamNumber = creamNumber
      this.sugarNumber = sugarNumber
    }
  
    coffeeProfile() {
      return `A ${this.type} coffee with ${this.creamNumber} ${this.creams()}, ${this.sugarNumber} ${this.sugars()}`
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
    coffeeType() {
        if (this.type === "black coffee") {
            return `${this.type} coffees`
        } else {
            return `${this.type} coffee`
        }
    }
    creamAndSugar () {
        return `${this.type} coffee with ${this.creamNumber} ${this.cream} and ${this.sugarNumber} ${this.sugar} sugars`
    }
  }
let coffeeOrder = new Coffee("black", "half and half", "cane", 1, 2)

// console.log(coffeeOrder.coffeeProfile())
//A black coffee with 1 half and half cream, 2 cane sugar


// console.log(coffeeOrder.oneCreamTwoSugar())
// black coffee with half and half and two cane sugars

//console.log(coffeeOrder.coffeeProfile())
// A black coffee with half and half cream, cane sugar

 //  console.log(coffeeOrder) 
//  Coffee {
//     type: 'black coffee',
//     cream: ' half and half',
//     sugar: 'suagar'
//   }