// write a funciton to remove all the odd number and return a new array with a even number only

function removeOdd(emptyArr) {
    let resultArr = [];
  
    for (let i = 0 ; i <= (emptyArr.length-1) ; i++) {
        
        if ( emptyArr[i] % 2 == 0) {
            resultArr.push(emptyArr[i]);
            //atau bisa ditulis resultArr[result.length] = emptyArr[i]
        }
        // } else if (emptyArr[i] % 2 != 0) {
        //     resultArr.pop 
       
        // } 
    }
    return resultArr

}

console.log(removeOdd([1,2,3,4,5,6,7,8,9,10]))