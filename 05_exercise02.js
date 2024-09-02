//Write a function that takes an array of words and returns a string by concatenating the words in the array,
//separated by commas and - the last word - by an 'and'.
//a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”

let contoh = ["apple", "banana", "cherry", "date"];

function lostSpace (arr) {
    let result = ""
    for (let i = 0 ; i <= (arr.length-2) ; i++) {
        result = result + "," + arr[i]
    }
    result = result + ", and " + arr[arr.length-1]
    result = result.substring(1);
    return result 
}

console.log (lostSpace(contoh))