// Calling Prototype Method  //

// function UserCreator(name, score) {
//   this.name = name;
//   this.score = score;
// }
// UserCreator.prototype.increment = function () {
//   this.score++;
// };
// UserCreator.prototype.login = function () {
//   console.log("login");
// };
// const user1 = new UserCreator("Eva", 9);
// user1.increment();

//   This Keyword Scoping Issues  //

// function UserCreator(name, score) {
//   this.name = name;
//   this.score = score;
// }
// UserCreator.prototype.increment = function () {

//   function add1() {
//     this.score++;
//   }
//   // const add1 = function(){this.score++;}
//   add1();
// };
// UserCreator.prototype.login = function () {
//   console.log("login");
// };
// const user1 = new UserCreator("Eva", 9);
// user1.increment();

// We need to introduce arrow functions - which bind this lexically  //

// function UserCreator(name, score) {
//   this.name = name;
//   this.score = score;
// }
// UserCreator.prototype.increment = function () {
//   const add1 = () => {
//     this.score++;
//   };
//   add1();
// };
// UserCreator.prototype.login = function () {
//   console.log("login");
// };
// const user1 = new UserCreator("Eva", 9);
// user1.increment();

// ES6  classword Keyword //

// class UserCreator {
//   constructor(name, score) {
//     this.name = name;
//     this.score = score;
//   }
//   increment() {
//     this.score++;
//   }
//   login() {
//     console.log("login");
//   }
// }
// const user1 = new UserCreator("Eva", 9);
// user1.increment();


        // Recape Of ClassWord //

        
// const obj = {
//     num : 3
//    }
//    obj.num // 3
//    obj.hasOwnProperty("num") // ? Where's this method?
//    Object.prototype // {hasOwnProperty: FUNCTION}
