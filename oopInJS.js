// console.log('OOP');

// function Car(model) {
//     this.model = model;
    
//     this.getModel = () => this.model;
//     this.drive = () => console.log('Driving....');
//   }
//   const BMW = new Car('BMW');
//   const Volvo = new Car('Volvo');
//   BMW.drive(); // Driving...
//   Volvo.drive(); // Driving...
  
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     sound() { return ''; }
//     toString() {
//         return Object.getPrototypeOf(this).constructor.name;
//     }
// }
// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     sound() {
//         return 'Meow!';
//     }
// }
// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     sound() {
//         return 'Woof!';
//     }
// }
// const Tom = new Cat('Tom');
// console.log(Tom.sound()); // Meow!
// const Rex = new Dog('Rex');
// console.log(Rex.sound()); // Woof!

// const createCounter = () => {
//     // A variable defined in a factory or constructor function scope
//     // is private to that function.
//     let count = 0;
//     return ({
//     // Any other functions defined in the same scope are privileged:
//     // These both have access to the private `count` variable
//     // defined anywhere in their scope chain (containing function
//     // scopes).
//     click: () => count += 1,
//     getCount: () => count.toLocaleString()
//    });
//   };
  
//   const counter = createCounter();
  
//   counter.click();
//   counter.click();
//   counter.click();
//   counter.click();
//   counter.click();
  
//   console.log(counter);
//   console.log(
//     counter.getCount()
//   );

//   function Cat2(name, color) {
//     this.name = name;
//     this.color = color;
  
//     this.run = function () {
//       console.log("I’m running");
//     };
//     this.sound = function () {
//       console.log("Meow! Meow!");
//     };
//   }
  
//   const Tom2 = new Cat2("Tom2", "grey");
//   const Simon2 = new Cat2("Simon2", "red");
//   console.log(Tom2, Simon2)
  
//   class Cat3 {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }

//     run() {
//         console.log(this.name +  " is running");
//     }

//     sound() {
//         console.log("Meow! Meow!");
//     }
// }
// const Felix3 = new Cat3("Felix3", "white");
// console.log(Cat3);

// class Cat4 {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }
//     run() {
//         console.log(this.name +  " is running");
//     }
//     sound() {
//         console.log("Meow! Meow!");
//     }
// }
// class LazyCat extends Cat4 {
//   constructor(name, color) {
//     super(name, color)
//   }
//   run() {
//     console.log(this.name + ' is too lazy to run');
//   }
// }
// const Simon4 = new LazyCat("Simon4", "grey");
// const Felix4 = new Cat("Felix4", "white");
// console.log(Cat4, LazyCat);

// function Cat5(name, color) {
//     this.name = name;
//     this.color = color;
//   }
//   Cat5.prototype.run = function () {
//       console.log("I’m running");
//   };
//   Cat5.prototype.sound = function () {
//       console.log("Meow! Meow!");
//   };
//   const Tom5 = new Cat5("Tom5", "grey");
//   const Simon5 = new Cat5("Simon5", "red");
//   console.log (Cat5, Cat5.name, Cat5.color);
//   console.log (Tom5, Tom5.name, Tom5.color);
//   console.log (Cat5.prototype);
  
//   const user = {
//     name: "Michael",
//     age: 30,
//     sayHi() {
//       // this - is "current object"
//       console.log(this.name);
//     }
//   };
//   user.sayHi(); // Michael

//   const arrowFn1 = () => {
//     console.log(this);
//   }
//   arrowFn1();

//   function Circle() {
//     this.PI = 3.14;
//     this.r = 20;
//     this.getArea = () => {
//       console.log(this);     
//       return this.PI * Math.pow(this.r, 2);
//     }
//    }
//   const cr = new Circle();
//   cr.getArea();
//   //-------------------------------------------------
//   const mod = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
//   };
//   const unboundGetX = mod.getX;
//   console.log(unboundGetX()); // The function gets invoked at the global scope // expected output: undefined
  
//   const boundGetX = unboundGetX.bind(mod);
//   console.log(boundGetX());
//   // expected output: 42
  
//   const numbers = [5, 6, 2, 3, 7];
// const max = Math.max.apply(null, numbers);
// console.log(max);
// // expected output: 7
// const min = Math.min.apply(null, numbers);
// console.log(min);
// // expected output: 2

// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   function Food(name, price) {
//     Product.call(this, name, price);
//     this.category = 'food';
//   }
//   console.log(new Food('cheese', 5).name);  // expected output: "cheese"
console.log('\n_______________ The CHESS pieces _______________\n')
  class Chess {
    constructor(figureName, quantity, weight, feature) {
        this.figureName = figureName;
        this.quantity = quantity;
        this.weight = weight;
        this.feature = feature;
      }
    info() {
        console.log(this.figureName + 'some info');
    }
}
class Pawn extends Chess {
  constructor(figureName, quantity, weight, feature) {
    super(figureName, quantity, weight, feature)
  }
  info() {
    console.log('\n ', pawn);
    console.log("Feature №1: on my first move I can jump 1 cell");
    console.log("Feature №2: if I reach the end of the chessboard I can turn into the Queen\n");
  }
}
const pawn = new Pawn("Pawn", 8, 1, 2);
pawn.info();

class Knight extends Chess {
  constructor(figureName, quantity, weight, feature) {
    super(figureName, quantity, weight, feature)
  }
  info() {
    console.log('\n ', knight);
    console.log("Feature: the Queen isn't a horse :))) and she can't jump like me!\n");
  }
}
const knight = new Knight("Knight", 2, 3, 1);
knight.info();

class Bishop extends Chess {
  constructor(figureName, quantity, weight, feature) {
    super(figureName, quantity, weight, feature)
  }
  info() {
    console.log('\n ', bishop);
    console.log("Feature: my twin brother... we almost look alike...\n"
    + "but he chose a different color of the cells :(\n");
  }
}
const bishop = new Bishop("Bishop", 2, 3, 1);
bishop.info(); 

class Castle extends Chess {
  constructor(figureName, quantity, weight, feature) {
    super(figureName, quantity, weight, feature)
  }
  info() {
    console.log('\n ', castle);
    console.log("Feature: castling with the King - my secret power is! \n");
  }
}
const castle = new Castle("Castle", 2, 5, 1);
castle.info(); 

class Queen extends Chess {
  constructor(figureName, quantity, weight, feature) {
    super(figureName, quantity, weight, feature)
  }
  info() {
    console.log('\n ', queen);
    console.log("Feature1: I have a power of all figures!... almost...");
    console.log("Feature2: ...damn Knigt... I hate horses! \n");
  }
}
const queen = new Queen("Queen", 1, 9, 2);
queen.info();

class King extends Chess {
  constructor(figureName, quantity, weight, feature) {
    super(figureName, quantity, weight, feature)
  }
  info() {
    console.log('\n ', king);
    console.log("Feature: I am the VIP. Calculate my weight. It more than summary of all figures!");
  }
}
let king = new King("King", 1, undefined, 1);
king.info();

const kingWeigtMin = 1 +
pawn.  quantity * pawn.  weight +
knight.quantity * knight.weight +
bishop.quantity * bishop.weight +
castle.quantity * castle.weight +
queen. quantity * queen .weight

console.log('\n  The minimum weight of his majesty is ' + kingWeigtMin);
king = new King("King", 1, kingWeigtMin, 1);
console.log(king);