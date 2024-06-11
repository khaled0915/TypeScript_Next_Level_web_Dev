{
    // Type alias 


    type Student = {
        id : number ,
        name : string ,
        age : number ,
        address : string
        contactNo? : string // optional
    }

const stu1 : Student = {
    id : 1 ,
    name : 'khaled' ,
    age : 25 ,
    address : 'sylhet'
}

const stu2 :Student = {
    id : 2 ,
    name : 'saif' ,
    age : 25 ,
    address : 'dhk'
}



// type alias also works with string 

type UserName = string ;

const user : UserName = 'khaled'


// tA in function


type Add = (num1 : number , num2: number)=> number ;

const add :Add = ( num1 , num2) => num1 + num2 
























}