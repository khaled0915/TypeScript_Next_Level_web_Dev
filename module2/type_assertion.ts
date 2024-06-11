{

// type assertion

let anything : any;

anything = 'next level web dev';
anything = 2212;
//(anything as number).

//(anything as string).



// exmpl with function

const kgToGm = ( value : string | number): string | number | undefined =>{
    if ( typeof value === 'string'){
        const convertedValue = parseFloat(value)*1000
        return `the converted value is ${convertedValue}`
    }
    else if(typeof value === 'number'){
        return value*1000
    }

    
}

const result1 = kgToGm(1000) as number

const result2 = kgToGm('100') as string



// example with try catch
type CustomError = {
    message : string
}

try{

}
catch(error){

    console.log((error as CustomError).message);

}





}