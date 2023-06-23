// this code is about to find out if 1st january will be a Sunday between 2014 to 2050;

for(let year=2014  ; year<=2050;year++){
    let date = new Date(year , 0 ,1);
    if(date.getDay()===0){
        console.log(`1st January is being a Sunday ${year}`);
    }
    
}


console.log('hello from js')

