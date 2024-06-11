{


// interface vs type  alias

// we can use type alias for all primitive data type 
// and we can use interface for non-primitive type


type User1 = {
    name : string ;
    age : number ;
}

interface User2 {
    name : string ;
    age : number ;
}


const user1 : User2 ={
    name:'khaled',
    age : 22
} 


// for primitive ---> type alias can be used

type rollNumber = number 


// we can extend the type using intersection 

// for type alias we use "&"

type UserWithRole1 = User1 & { role : string}



const user2 : UserWithRole1 ={
    name:'khaled',
    age : 22,
    role : 'student'
} 


// for interface we can use "extend" 

interface UserWithRole2 extends User2 {
    role : string
}

const user3 : UserWithRole2 ={
    name:'khaled',
    age : 22,
    role : 'student'
}


// we can make the type as interface by extends

interface UserWithRole2 extends User1{
    role : string
}



// in js array and function is also act like object



// for array

type Roll = number[];

interface Roll1 {
    [index:number] : number
}

const roll : Roll1 = [1,2,3,4,5]


// for function


type Add = (num1:number ,num2:number) => number


interface Add1 {
(num1:number , num2: number) : number
}


const add :Add1 = (num1, num2) => num1+num2













}