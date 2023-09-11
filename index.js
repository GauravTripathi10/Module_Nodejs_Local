// What is the module:reusable piece of code that encapsulates a specific functionalit

// This is all about how to create a custom module and use it on other file
//  on the same computer/system(Local Module)

// if we want to use the add multiple and maxnumber function ouside the op.js 

const opreations=require("./op.js");

const searchElements=require('./search.js');


console.log(opreations.add(12,3,0));
console.log(opreations.mutli(12,3,0));
console.log(opreations.maxNum(12,3));

// Search the elements:
console.log(searchElements.search(12,34,89,90,67));

// require is a bulit in function or property.(somthing like import which is local module or inbuilt module )

console.log(require('./op.js'));

// it always returns an object in which all exports module or properties are present