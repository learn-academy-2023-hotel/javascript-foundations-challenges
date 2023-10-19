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
  
// Coffee Maker: copy the given Coffee class into a text editor
  // Write the code that makes a black coffee object
    // let coffee = new Coffee ("black", 0, 0)
  // Write the code that outputs the black coffee's profile
    // console.log(coffee.coffeeProfile())
    // output: A black coffee with 0 cream, 0 sugar
  // Write the code that makes a coffee object with 1 cream and 2 sugars
    // let java = new Coffee ("Columbian", 1, 2)
  // Write the code that outputs the 1 cream and 2 sugars coffee profile
//    console.log(java.coffeeProfile())
// output:  A columbian coffee with 1 cream, 2 sugars

// Latte Maker: create a class for Latte
  // Write a Latte class that takes a flavor, a milk type, and a number of shots
  class Latte {
    constructor(flavorString, milkString, shotsNumber) {
        this.flavor = flavorString
        this.milk = milkString
        this.shot = shotsNumber
    }
    // Write a method for your Latte class that outputs the latte's profile
    latteProfile() {
        return `A ${this.flavor} latte with ${this.milk} and ${this.shots()}.`
    }
    
    shots() {
        if(this.shot > 1){
            return `${this.shot} shots`
        } else {
            return `${this.shot} shot`
        }
    }
  }
  // Write the code that makes a regular, single shot latte
  let singleLatte = new Latte ("regular", "none", 1)
  // Log the regular, single shot latte's profile
  console.log(singleLatte.latteProfile())
  //output: A caramel latte with whole and 1 shot.
  // Write the code that makes a double shot, hazelnut latte with almond milk.
    let hazel = new Latte ("hazelnut", "almond", 2)
  // Log the double shot, hazelnut latte with almond milk's profile.
  console.log(hazel.latteProfile())
//   caramel latte with whole and 1 shot.