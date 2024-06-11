{


// union types ( or | )


type WebDev = 'frontend' | 'backend' // string literal types ---> the value itself is a type 

const developer : WebDev = 'frontend'




type User = {
    name : string ,
    age : number ,
    gender : 'male' | 'female',
    bg:'o+' | 'ab+' | 'b+' 
}

const user1 : User ={
    name : 'khaled' , 
    age : 22 ,
    gender : "male",
    bg : 'o+'

}


// intersection types ( or & )

type FrontendDev = {
    skills : string[] ,
    designation1 : 'frontend dev'
}

type BackendDev = {
    skills : string[],
    designation2 : 'backend dev'
}

type Fullstack =  FrontendDev & BackendDev


const FullstackDeveloper  : Fullstack = {
    skills : ['html' , 'css' , 'js', 'python' , 'express' , 'react'],
    designation1:'frontend dev',
    designation2:'backend dev'
}








}