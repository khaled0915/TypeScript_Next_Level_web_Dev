{
    // generic constraints with keyof operator

    type Vehicle ={ 
        bike : string ,
        car : string ,
        ship : string
    }



    type owner = "bike" | "car" | "ship" ; // manually

    type owner2 = keyof Vehicle ;


    const person  : owner2 = 'bike'
}