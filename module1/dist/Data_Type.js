"use strict";
// basic data type in ts
// primitive data type 
// string
let firstName = 'khaled'; // explicit
let lastName = 'saifullah '; // implicit 
// number
let roll = 123;
// boolean 
let isAdmin = true;
// undefined 
let x = undefined;
// null 
let y = null;
// any type ; not recommended
let d;
d = 123;
d = true;
d = 'add';
// non-primitive data type
//array
let friends = ['abc', 'bcd'];
let rolls = [1, 3, 3, 3];
// tuple --> it is a type of array but --> maintain order of the type of value
let ageName = [22, 'khaled'];
// ageName[0] = 'ad' // it is not assignable 
ageName[0] = 1122; // its assignable
