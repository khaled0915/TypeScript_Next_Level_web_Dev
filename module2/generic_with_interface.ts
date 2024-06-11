{

// generic with interface


interface Developer<T,X =null> {
    name : string;
    computer : {
        brand : string;
        model : string ;
        releaseYear : number ;
    }
    smartWatch : T ;
    bike? : X 

}


type EmilabWatch = { brand: string ;
    model : string ;
    display : string}

const poorDev : Developer<EmilabWatch> = 
    {
        name : 'mr.X' ,
    computer : {

        brand : 'asus' ,
        model : 'x515' ,

        releaseYear : 2018

    },
    smartWatch : {
        brand :'emilab' ,
        model : 'kshw' ,
        display : 'oled'
    }

    }



    interface AppleWatch {
        brand : string ;
        model : string ;
        heartRate : boolean ;
        walkTrack : boolean
    }


    interface R15Bike {
        model : string ,
        price : number
    }
const richDev : Developer<AppleWatch , R15Bike> = 
    {
        name : 'mr.rich' ,
    computer : {

        brand : 'mac' ,
        model : 'x' ,

        releaseYear : 2018

    },
    smartWatch : {
        brand :'apple' ,
        model : 'ks' ,
        heartRate : true ,
        walkTrack : true
        
    },
    bike : {
        model : 'r15' ,
        price : 232
    }

    }

























}