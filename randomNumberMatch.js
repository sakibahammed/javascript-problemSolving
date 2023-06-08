// console.log(Math.ceil(Math.random()*3))


// console.log(Math.random()*(5-2)+2)

// let min = Math.ceil(min);
// let max = Math.floor(max)


const num = Math.ceil(Math.random()*10);
// const userNum = prompt("Guess the number");
const userNum = 2;
if(num === userNum){
    console.log('Congratulation')
}
else{
    console.log(`Sorry, try again. This time the number was ${num}`)
}



function run(n){
    for(let i =1 ; i<=n;i++){ // first 
        for(let j =1 ; j<=n;j++){
            //code ...
        }
    }

    for(let k = 1; k<=n;k++){
        console.log(k)
    }
}

run(10)




