//Write a code to swap the case of each character from string ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’

let string = 'The QuiCk BrOwN Fox';
let stringArr = string.split("")
// let stringArrResult = []
console.log (stringArr);

let stringCheck = string.toLowerCase();
let stringCheckArr = stringCheck.split("")
console.log (stringCheckArr)

for (let i = 0 ; i <= (string.length - 1) ; i++) {
    if (string[i] !== stringCheck[i]) {
        stringArr[i] = stringArr[i].toLowerCase(stringArr[i])
        // stringArrResult.push(stringArr[i]);
    } else {
        stringArr[i] = stringArr[i].toUpperCase(stringArr[i])
        // stringArrResult.push(stringArr[i]);
    }
}



console.log (stringArr.join(""))


//solution 2

let targetConvert = "The QuiCk BrOwN Fox";
let result = "";

for (let i = 0; i < targetConvert.length; i++) {
    if(targetConvert[i] >= "a" && targetConvert[i] <= "z") {
        result += targetConvert[i].toUpperCase();
    } else if (targetConvert[i] >= "A" && targetConvert[i] <="Z") {
        result += targetConvert[i].toLowerCase();
    } else {
        result += targetConvert[i];
    }
}
