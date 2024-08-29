
//Check if String is Palindrom 

let testPalindromOrNot = "kodok";
console.log (testPalindromOrNot.length);
let array = [];

for (let i=0 ; i <=(testPalindromOrNot.length -1) ; i++) {
    array.push(testPalindromOrNot[i])
    console.log (array)
}

for (let j = 0; j < (testPalindromOrNot.length /2) ; j++) {
    if (testPalindromOrNot[j] === testPalindromOrNot[(testPalindromOrNot.length-1)-j]) {
        console.log(testPalindromOrNot + " is Palindrome" )
        break;
    } else {
        console.log (testPalindromOrNot + " is not a Palindrome")
        break;
    }
}


