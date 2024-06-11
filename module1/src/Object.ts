// reference type --> object

const user : {
    university : 'AIUB' ;  // literal type ->> when a value act like a type 
    firstName : string ;
    middleName? : string; // optional  type
    lastName : string ;
   readonly country : string ; // it cannot be changed 
} 
= {
    university : 'AIUB' ,
    firstName : 'khaled' ,
    lastName : 'saifullah',
    country : "bangladesh"
}

// user.country='bng'; // it cannot be changed ccause its readonly