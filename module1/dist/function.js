"use strict";
// function
// 2 types of function 
// normal and arrow 
// normal 
function add(num1, num2 = 10) {
    return num1 + num2;
}
// add(2,'2') this will not work 
//arrow
const addArrow = (num1, num2) => num1 + num2;
// object ->> function --> method : when we write a function in an object it's called method
