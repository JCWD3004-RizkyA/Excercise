//Write a function to find duplicate values in an array
//a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5 , 1] → [2, 3, 5]

function duplicateIs(arr) {
    let howMany = [];
    for (let i = 0  ; i <= (arr.length-1) ; i++) {
        // console.log(arr[i])
        for (let j = 0 ; j <= (arr.length-1) ; j++) {
            // console.log(arr[j]) 
            if ((arr[i] === arr[j])) { //jangan sampaii dia menyamakan dengan array element dia sendiri pada i if berikutnya
                if (i !== j) {           // 1 sama dengan 1, 1 sama dengan 2, 1 sama dengan 2 ... sampai akhir ?
                    howMany.push(arr[i])
                    console.log (howMany)
                }

            }
        }
    }

    let howManyResult = [] // ini berati kalau udah ada yang sama gk usah dimasukkin
    for (let i = 0 ; i <(howMany.length-1) ;i++) {
        if (howMany[i] !== howMany [i-1]) {
            howManyResult.push(howMany[i])
        }
    }

    return howManyResult
}

console.log(duplicateIs([2,2,1])) //cuman ini gk berfungsi kalau duplicate nya terpisah di belakang  