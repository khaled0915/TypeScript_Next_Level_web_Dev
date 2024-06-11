
{


// spread operator 
// rest operator
// destructure operator


// spread operator on array
const arr1 : string[] = ['ad' ,'ad' , 'ad'] ;
const arr2 : string[] = ['ae' ,'ar' , 'at'] ;

arr1.push(...arr2)

// spread operator on object

const mentors1 = {
    typescript : 'mezba' ,
    redux : 'mir' , 
    dbms : 'mizan'
}

const mentors2 = {
    prisma : 'firoz' ,
    next : 'tonmoy' ,
    cloud : 'nahid'
}

const mentorsList ={
    ...mentors1,
    ...mentors2
}



// rest operator

const greetFriends = (...friends : string []) =>{

    friends.forEach((friend:string)=> console.log(`hi ${friend}`))
}


// destructuring

// object destructure

const user = {
    id : 123 ,
    name : {
        firstName:'khaled' ,
        middleName :'saifullah' ,
        lastName:'chy'
    },
    contact : '01705342424',
    address : 'sylhet'
}

const { contact : contactNo , name:{middleName : midName }} = user     // name alias


// array destructure


const Movies = [ 'godzilla' , 'matrix' , 'mad max' , 'john wick' , 'kgf' , '12th fail' , 'seven' , 'inception' , 'batman']


const [ , , favMovies , , ...rest ] = Movies




}