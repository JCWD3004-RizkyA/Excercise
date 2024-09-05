//Create a function that can loop the number of times according to the input we provide, and will
//replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".

//multipies of 3 = Fizz
//multiplies of 5 = Buzz
//multiplies of 3 and 5 with FizzBuzz

function fizzBuzz(n) {
    let result = ""
    let fizz 
    for (let i=1 ; i <=n ; i++) {
        if ((i % 3 === 0) && (i % 5 !== 0) ){
            console.log("Fizz");
        } else if ( (i % 5 == 0) && (i % 3 !== 0)) {
            console.log("Buzz");
        } else if ( (i % 3 === 0) && (i % 5 === 0) ) {
            console.log ("FizzBuzz")
        } else {
            console.log(i)
        }
       

    }
}

fizzBuzz(15)