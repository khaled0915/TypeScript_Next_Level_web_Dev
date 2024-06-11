// basic data type in ts

// primitive data type 
// string

let firstName: string = 'khaled' ; // explicit
let lastName = 'saifullah ' // implicit 

// number

let roll : number = 123;

// boolean 

let isAdmin : boolean = true ;

// undefined 

let x : undefined = undefined ;

// null 

let y: null = null 

// any type ; not recommended


let d; 

d = 123 ;
d= true ;
d= 'add'

// non-primitive data type

//array

let friends : string[] = ['abc' ,'bcd'] ;


let movies : string[] = ['john wick' , 'mad max' , 'king kong' , 'inception']

let rolls : number[] = [1,3,3,3]

// tuple --> it is a type of array but --> maintain order of the type of value

let ageName : [number,string] = [22,'khaled']
// ageName[0] = 'ad' // it is not assignable 
ageName[0]= 1122// its assignable

let result : [number, string] = [3.44, '1st sem']