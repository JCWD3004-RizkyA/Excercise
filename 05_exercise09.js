//Write a function to find duplicate values in an array
//a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]

function duplicateIs(arr) {
    let howMany = [];
    for (let i = 0  ; i <= (arr.length-1) ; i++) {
        console.log(arr[i])
        for (let j = 0 ; j <= (arr.length-1) ; j++) {
            console.log(arr[j])
            if ((arr[i] === arr[j])){
                if (i !== j) {
                    howMany.push(arr[i])
                    console.log (howMany)
                }

            }
        }
    }
    return howMany
}

console.log(duplicateIs([1, 2, 2, 2, 3, 3, 4, 5, 5]))