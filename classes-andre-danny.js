// class Coffee {
//     constructor(type, cream, sugar) {
//       this.type = type.toLowerCase()
//       this.cream = cream
//       this.sugar = sugar
//     }
  
//     coffeeProfile() {
//       return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//     }
  
// //     creams() {
// //       if (this.cream > 1) {
// //         return `${this.cream} creams`
// //       } else {
// //         return `${this.cream} cream`
// //       }
// //     }
  
// //     sugars() {
// //       if (this.sugar > 1) {
// //         return `${this.sugar} sugars`
// //       } else {
// //         return `${this.sugar} sugar`
// //       }
// //     }
// //   }
// // // Write the code that makes a black coffee object
// //   const blackCoffee = new Coffee("black coffee", "no", "no")
// //   // console.log(blackCoffee.type)

// //   Write the code that outputs the black coffee's profile
// // console.log(blackCoffee.coffeeProfile())

// // Write the code that makes a coffee object with 1 cream and 2 sugars
// // const coffeeWithCream = new Coffee("Creamy coffee", 1, 2)

// // Write the code that outputs the 1 cream and 2 sugars coffee profile
// // console.log(coffeeWithCream.coffeeProfile())

// -----------------------------------------------------------

// // Latte Maker: create a class for Latte
// // Write a Latte class that takes a flavor, a milk type, and a number of shots
// class Latte {
//   constructor(flavor, type, shots) {
//     this.type = type
//     this.flavor = flavor
//     this.shots = shots
//   }
//   // Write a method for your Latte class that outputs the latte's profile
//   latteProfile(){
//     return `${this.flavor} latte with ${this.noMilk()} milk and ${this.shot()} of espresso`
//   }
//   shot() {
//     if(this.shots > 1){
//       return `${this.shots} shots`
//     }else{
//       return `${this.shots} shot`
//   }
//   }
//   noMilk(){
//     if(this.type === "no"){
//       return `no`
//     }else{
//       return this.type
//     }
//   }
//   }

// const latte = new Latte("hazelnut" , "oat" , 3) 
// console.log(latte.latteProfile()) //hazelnut latte with oat milk and 3 shots of espresso
// // Write the code that makes a regular, single shot latte


// const latte2 = new Latte("regular" , "cow" , 1) 
// // // Log the regular, single shot latte's profile
// console.log(latte2.latteProfile())

// // Write the code that makes a double shot, hazelnut latte with almond milk.
// const latte3 = new Latte("hazelnut" , "almond" , 2) 

// // Log the double shot, hazelnut latte with almond milk's profile.
// console.log(latte3.latteProfile())


// --------------------------------------------------------------
// Volume of a Cylinder: create a class for Cylinder
const Pi = 3.14159265359
class Cylinder {
    constructor(radius, height,) {
      this.radius = radius
      this.height = height
    }
    calcVol(){
      let volume = Pi * (this.radius ** 2) * this.height
      return volume
    }
  }
  const cylinderVol = new Cylinder(3,5)
  console.log(cylinderVol.calcVol())
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)


// Write the code that rounds the volume of the cylinder to four decimal places



// Write the code that creates three unique cylinder objects
