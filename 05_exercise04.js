//Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays
//are of the same length.
//a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

function addTwoArr (arr1 , arr2) {
    let result =[];
    for (let i = 0 ; i <= (arr1.length-1) ; i++){
       let addresult =  arr1[i] + arr2[i];
       result.push(addresult);
    }
    return result
}


let a = [1,2,3];
let b = [3,2,1];

console.log(addTwoArr(a,b))
