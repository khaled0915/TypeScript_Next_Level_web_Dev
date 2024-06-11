{


// ternary || optional chaining || nullish coalescing

const age : number = 19 ;

if(age>=18){
    console.log('adult');
}
else{
    console.log('not adult');
}

// using ternary ---> its works on falsy value

const isAdult = age >= 18 ? 'adult' : 'not adult' 
console.log({isAdult});




// nullish coalescing operator 
// null / undefined ---> decision making  ----> it just work on null and undefined


const isAuthenticated = null ;

const result1 = isAuthenticated ?? "guest";

console.log(result1);


// optional chaining


type User = {
    name : string ,
    address : {
        city : string ,
        country : string ,
        presentAddress : string ,
        parmanentAddress? : string 
    }
}


const user: User ={

    name : 'khaled',
    address : {
        city : 'sylhet',
        country : 'bangladesh',
        presentAddress : 'sylhet'
    
}

}

const PmtAddress = user?.address?.parmanentAddress ?? 'no parmanent address'


console.log(PmtAddress);

}