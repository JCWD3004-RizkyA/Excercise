// Write a code to remove the first occurrence of a given “search string” from a string

let str1 = "Hello World"
let str1Arr = str1.split('');
// console.log(str1Arr);
// console.log (str1Arr.length)
let str2 = "ell"
let str2Arr = str2.split('');
// console.log(str2Arr)

// str1Arr.splice(1 ,5);
// console.log("ini adalah cobaSlice = " + str1Arr)

//kita harus mencari huruf pertama dari str2 match di str1 index keberapa
let sliceMulai = 0;
let sliceAkhiran = 0;
let pengecekan = false;
let sampaiKapan = 0;
for (let i = 0 ; i <= (str1Arr.length-1) ; i++) {
//    console.log (i)
    if (str2Arr[0] === str1Arr[i]) {
        sliceMulai = sliceMulai + i; //slice mulai pada karakter awal ditemukan
        console.log ("ini adalah slice mulai = " + sliceMulai)
        pengecekan = true;
        continue;
    }

    if (pengecekan) {
        for (let j = 0 ; j <= (str2Arr.length-1) ; j++) {
            if (str2Arr[j] === str1Arr[i+1]) {
                    sampaiKapan += 1;
                    sliceAkhiran = sampaiKapan+1;
                    console.log ("Sama Nih ke " + sliceAkhiran);
                    break;
            }
        }
    }
    
}

console.log (sliceMulai);
console.log (sliceAkhiran);

console.log (str1Arr)

str1Arr.splice(sliceMulai , sliceAkhiran)
console.log(str1Arr.join(""))



