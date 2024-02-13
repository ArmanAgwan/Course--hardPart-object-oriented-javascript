//    Avoid Duplication With Prototype    //

// const functionStore = {
//   increment: function () {
//     this.score++;
//   },
//   login: function () {
//     console.log("You're loggedin");
//   },
// };
// const user1 = {
//   name: "Phil",
//   score: 4,
// };
// user1.name; // name is a property of user1 object
// user1.increment; // Error! increment is not!

//   Prototype Walkthrough  //

// function userCreator(name, score) {
//   const newUser = Object.create(userFunctionStore);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// }
// const userFunctionStore = {
//   increment: function () {
//     this.score++;
//   },
//   login: function () {
//     console.log("You're loggedin");
//   },
// };
// const user1 = userCreator("Phil", 4);
// const user2 = userCreator("Julia", 5);
// user1.increment();

//    Functions Are Objects & Functions  //

// function multiplyBy2(num){
//     return num*2
//    }
//    multiplyBy2.stored = 5
//    multiplyBy2(3) // 6
//    multiplyBy2.stored // 5
//    multiplyBy2.prototype // {}

         //    New Keywords & Share Functions With Prototype     //

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
