//Write a function that adds an element to the end of an array. However, the element should only be added if it is
//not already in the array.
//a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
//b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
function addIfNotPre(arr, newElement) {
    let isSame = false;
    for (let i = 0 ; i <= (arr.length-1) ; i++) {
        if (arr[i] === newElement) {
            isSame = true;
            break;
        } 
    }

        if (!isSame) {
            arr.push(newElement)
        }
    

    return arr;
}

console.log(addIfNotPre([1, 2, 3, 4] , 4));
console.log(addIfNotPre([1, 2, 3, 4] , 7))