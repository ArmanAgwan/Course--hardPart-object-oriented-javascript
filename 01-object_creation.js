// const user1 = {
//     name: "Phil",
//     score: 4,
//     increment: function() {
//     user1.score++;
//     }
//    };
//    user1.increment(); //user1.score => 4


                      //       Object Dot Notation    //


//    const user2 = {}; //create an empty object
// user2.name = "Julia"; //assign properties to that object
// user2.score = 5;
// user2.increment = function() {
//  user2.score++;
// };


            //   Object.Create       //

//  const user3 = Object.create(null);
//  user3.name = "Eva";
//  user3.score = 9;
//  user3.increment = function() {
//     user3.score++;
//    }; 
   
   
   //     creating Object With Functions   //

   function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function() {
    newUser.score++;
    };
    return newUser;
   };
   const user1 = userCreator("Phil", 4);
   const user2 = userCreator("Julia", 5);
   user1.increment()