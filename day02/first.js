const {add,sub}=require("./second.js"); //importing the function add from second.js file
console.log("First file");

// (function (){
//     console.log("Second file");

//     function add(a, b) {
//     return a + b;
// }   
// })();//() immediately invoked function expression by IIFE 


add(2, 3); //5
sub(5, 3); //2
//CJS Module JS System module
//

//IFFE