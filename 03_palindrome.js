
//Check if String is Palindrom 

// balik kata yang kita punya
// buat wadah array kosong untuk menyimpan kata yang sudah dibalik
// buat wadah array kosong untuk menyimpan kata yang sudah dibalik melalui push. push dilakukan satu persatu dari kata akhir ke kata awal
// buat sebuah toogle, yang menandakan apakah dia palindrome atau bukan. 
// sekalinya setiap huruf yang dibandingkan tidak sama, berati ditandakan sebagai bukan palindrome
// untuk setiap loop, apabila seluruh hurufnya sama, maka palindrome. nilai tetap true dan akan tercetak is Palindrome


let testPalindromOrNot = "raceacar";
console.log (testPalindromOrNot.length);

// balik kata yang kita punya
// buat wadah array kosong untuk menyimpan kata yang sudah dibalik melalui push. push dilakukan satu persatu dari kata akhir ke kata awal
let array = [];

for (let i= testPalindromOrNot.length-1 ; i >=0  ; i--) {
    array.push(testPalindromOrNot[i])
    console.log (array)
}

// buat sebuah toogle, yang menandakan apakah dia palindrome atau bukan. 
let isPalindromes =true;

//sekalinya setiap huruf yang dibandingkan tidak sama, berati ditandakan sebagai bukan palindrome
for (let j = 0; j < (testPalindromOrNot.length) ; j++) {

    if (testPalindromOrNot[j] !== array[j]) {
        isPalindromes = false;
        break;
    } 
}

// untuk setiap loop, apabila seluruh hurufnya sama, maka palindrome. nilai tetap true dan akan tercetak is Palindrome
if (isPalindromes) {
    console.log ("is Palindrome")
} else {
    console.log("Is Not Palindrome")
}


//solusi pembahasan

// let targetStr = "madam"
// let isPalindrome = true;
// let start = 0;
// let end = targetStr.length -1;
 
// while (start < end){
//     if (targetStr[start] !== targetStr[end]) {
//         isPalindrome = false;
//         break;
//     }
//     start ++;
//     end --;
// }

// console.log (isPalindrome ? "Palindrome" : "Not a Palindrome")

