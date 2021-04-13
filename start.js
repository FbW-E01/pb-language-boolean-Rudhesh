// Check whether 3 is equal to "3" using loose comparison. Then, check whether they are equal while using strict comparison. Questions: Comment your answers in the js file.



console.log("3" == 3);
console.log("3" === 3);
// Is there a difference? Why/why not?
// Yes both work differently 
// == is used for comparing two variables, but it ignores the datatype of variable and will not compare the value of variables at all. 
// === is used for comparing two variables, but this operator also checks datatype and compares two values and takes type of variable in consideration. 



// Which comparison operator should we generally use? Why?
// always use === everywhere except in some conditions 
// because this operator also checks datatype and compares two values and takes type of variable in consideration. 


// What would happen if we were to use =?

// = in JavaScript is used for assigning values to a variable.
// It does not return true or false


let value = true;

console.log( (value === true) ? false : true); 



let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);

// its print Stacey because givenName value is not mention and 'john' comes after firstName 