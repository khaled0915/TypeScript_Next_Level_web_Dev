{

// function with generic 


const createArray = (param : string) : string[]=> {
    return [param] 
}

const createArrayWithGeneric = <T> (param : T) : T[]=> {
    return [param] 
}

const res1 = createArray('bangladesh')

const resGeneric = createArrayWithGeneric<boolean>(true)
const resGeneric2 = createArrayWithGeneric<string>('banglDESh')
const resObj = createArrayWithGeneric<{id:number ; name : string}> ( {id:222 , name:'khaled'} )




// with tuple

const createArrayWithTuple = <T,Q> (param1 : T , param2:Q) : [T,Q]=> {
    return [param1, param2] 
}


const resTuple = createArrayWithTuple<string, number>('string' , 323)
const resTuple2 = createArrayWithTuple<string,{name:string , id:Number}>('string' , { name : 'string' , id:333 })




const addCourseToStudent=<T> ( student: T) =>{


    const course = ' next level web dev'



    return {
        ...student ,
        course
    }
}


const student1 = addCourseToStudent( { name :'mr.x' , email : 'mrX@gmail.com' , dev:'frontend' } )
const student2 = addCourseToStudent( { name :'mr.y' , email : 'mrY@gmail.com' , type:'backend' } )












}