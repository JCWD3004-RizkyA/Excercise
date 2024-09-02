//Write a function to insert multiple given integer (not an array) to an array and have a maximum size input.
//The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the
//array can only contain 5 elements).
//a. Example :


// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

//step 1. make the list of number as an array
//step 2. check if the array length is not more than 5
//step 3. if more than five, delete the last array
//step 4. if done, convert back to list of numbers.


function max5Integers (arrInString) {
    let arr = arrInString.split(",")
    if (arr.length>=5) {
        arr.splice(5,arr.length)
    }
    return arr
}

console.log(max5Integers("5, 10, 24, 3, 6, 7, 8 , 14, 35 "))

