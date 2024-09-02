//Write a function from a given array of mixed data types and return the sum of all the number
//a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

function sumAllNum(arr) {
    
    let sum = 0;
    let sample = 1;

    for (let i = 0 ; i <= (arr.length -1) ; i++) {
        if ((typeof arr[i]) === typeof sample) {
            console.log(typeof arr[i])
            console.log(typeof sample)
            sum = sum + arr[i]
        } 
        
    }
    return sum
}

arr = ["3" , 1 , "string" , null , false , undefined , 2]

console.log(sumAllNum(arr))