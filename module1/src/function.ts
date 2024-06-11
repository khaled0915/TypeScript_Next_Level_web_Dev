{



// function

// 2 types of function 
// normal and arrow 


// normal 
function add(num1: number , num2 : number = 10):number{
    return num1 + num2 ;
}

// add(2,'2') this will not work 


//arrow
 

const addArrow = (num1:number,num2:number):number => num1+num2 


// object ->> function --> method : when we write a function in an object it's called method

const poorUser = {
    name : 'khaled' ,
    balance : 0 ,

    addBalance(balance:number) : string {
        return `My new balance is : ${this.balance+ balance}`
    }
}

const arr : number [] = [1,23,3] ;

const newArr :number[] = arr.map((elem : number) : number => elem*elem)

}