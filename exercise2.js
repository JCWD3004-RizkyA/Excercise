
//Check if String is Palindrom 

let testPalindromOrNot = "saippuakivikauppias";
console.log (testPalindromOrNot.length);
let array = [];

for (let i=0 ; i <= (testPalindromOrNot.length-1) ; i++) {
    array.push(testPalindromOrNot[i])
    console.log (array)
}

for (let j = 0; j < (testPalindromOrNot.length) ; j++) {

    if (testPalindromOrNot[j] === testPalindromOrNot[(testPalindromOrNot.length-1)-j]) {
        console.log(testPalindromOrNot + " is Palindrome" )
        break;
    } else {
        console.log (testPalindromOrNot + " is not a Palindrome")
        break;
    }
}


//solusi pembahasan

let targetStr = "madam"
let isPalindrome = true;
let start = 0;
let end = targetStr.length -1;
 
while (start < end){
    if (targetStr[start] !== targetStr[end]) {
        isPlaindrome = false;
        break;
    }
    start ++;
    end --;
}

console.log (isPalindrome ? "Palindrome" : "Not a Palindrome")



