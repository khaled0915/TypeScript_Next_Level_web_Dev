{


// generic type 

// const rollNum : number[] = [4,5,6]

const rollNum : Array<number> = [4,5,6]

// const mentors : string[] = ['d','f', 'g']
const mentors : Array<string> = ['d','f', 'g']

// const boolArr : boolean[] = [true, false , true]
const boolArr : Array<boolean> = [true, false , true]


// reusable generic type

type GenericArray<T> = Array<T> // we can write T instead of param



const rollNumber : GenericArray<number> = [4,5,6]


const mentor : GenericArray<string> = ['d','f', 'g']


const boolArray : GenericArray<boolean> = [true, false , true]



// array of object using generic

const user : GenericArray<{name : string , age : number}>  =[
    {
 name :'khaled' ,
 age : 22

},

{
    name : 'maxwell' ,
    age : 25
    
}


]



// generic tuple 

type GenericTuple<X,Y> = [X,Y] ;

const userS : GenericTuple<string,string> = ['d', 'df']



const userWithId : GenericTuple<number,{name:string , email : string}> =  [223, {name:'max' , email:'max@gmail.com'}]
















}