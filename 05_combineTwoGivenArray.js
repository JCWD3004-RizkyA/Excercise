//1. Write a function that will combine 2 given array into one array
//a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6]


function fuseArr (arr1, arr2) {
    arrFusion = arr1.concat(arr2)
    return arrFusion
}

console.log(fuseArr([4, 5, 6],[1, 2, 3]))