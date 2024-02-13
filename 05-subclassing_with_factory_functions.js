// Create Object With Factory Function //

// function userCreator(name, score) {
//   const newUser = Object.create(userFunctions);
//   newUser.name = name;
//   newUser.score = score;
//   return newUser;
// }

// userFunctions = {
//   sayName: function () {
//     console.log("I'm " + this.name);
//   },
//   increment: function () {
//     this.score++;
//   },
// };

// const user1 = userCreator("phil", 5);
// user1.sayName(); // "I am phil"

// 2 //

// function paidUserCreator(paidName, paidScore, accountbalance) {
//   const newpaidUser = userCreator(paidName, paidScore);
//   Object.setPrototypeOf(newPaidUser, paidUserFunctions);
//   return newpaidUser;
// }

// const paidUserFunctions = {
//   increaseBalance: function () {
//     this.accountbalance++;
//   },
// };

// Object.setPrototypeOf(paidUserFunctions, userFunctions);
// const paidUser1 = paidUserCreator("Alyssa", 8, 25);
// paidUser1.increaseBalance();
// paidUser1.sayName(); // "I'am Alyssa"


         // Sub Class Review //


const obj = {
  num: 3,
  increment: function () {
    this.num++;
  },
};
const otherObj = {
  num: 10,
};
obj.increment(); // obj.num now 4
obj.increment.call(otherObj); // otherObj.num now 11
// obj.increment.apply(otherObj);
