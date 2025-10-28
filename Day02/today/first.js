const {sum, sub, mul}= require("./current/index.js");
//importing multiple functions from index.js file
//index.js file is used to aggregate multiple modules into a single module
//it is a good practice to have an index.js file in each folder to export all the modules in that folder
//sum 
sum(2, 3); //5  

//subtract
sub(5, 3); //2
//multiply
mul(2, 3); //6



console.log("First file");

