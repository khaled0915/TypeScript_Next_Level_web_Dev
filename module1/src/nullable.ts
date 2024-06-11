{

// nullable types 

const searchName = (value: string | null) =>{
    if(value){
        console.log("searching");
    }
    else{
        console.log("theere is nothing to search");
    }
}

searchName(null)




// unknown types(typeof) ---> at first we dont know the type but at the run time we will get to know the type 


const getSpeedInMeterPerSecond =(value : unknown)=>{

    if(typeof value ==='number'){
        const convertedSpeed = (value*1000)/3600 ;

        console.log(`the speed is ${convertedSpeed} ms^-1`);

        
    }


   else if(typeof value === 'string'){
        const valueInNumber = value.split(" ");
        console.log(valueInNumber);

        const [val,unit] = value.split(" ")
        console.log(val);

        const convertedSpeed = (parseFloat(val)*1000)/3600 ;
        console.log(`the speed is ${convertedSpeed} ms^-1`);

    }
    else{
        console.log('wrong input');
    }
}

getSpeedInMeterPerSecond(null)



// never type   ---> if the function does not return anything 

const throwError= (msg:string):never =>{
    throw new Error(msg);
}

throwError('this is an error')


















}