{
    // constraints

    // specify some property 


    const addCourseToStudent=<T extends{ name:string , id : number , email : string } > ( student: T) =>{


        const course = ' next level web dev'
    
    
    
        return {
            ...student ,
            course
        }
    }
    
    
    const student1 = addCourseToStudent( { 
        id: 222,
        name :'mr.x' , 
        email : 'mrX@gmail.com' ,
         dev:'frontend' 
    } )
    const student2 = addCourseToStudent( { 

        id: 333,
        name :'mr.y' 
        , email : 'mrY@gmail.com' ,
         type:'backend' } )
    
    




























}