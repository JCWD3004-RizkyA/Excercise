//Write a code to capitalize the first letter of each word in a string

let kata = "hello world haiyaa"
let kataArr = kata.split("");
// console.log (kataArr);


for (let i = 0 ; i < (kata.length-1) ; i++) {
    if (i === 0) {
        kataArr[0] = kataArr[0].toUpperCase(kataArr[0])
        console.log(kataArr[0]);
    } else if ( kataArr[i] === " ") {
        kataArr[i+1] = kataArr[i+1].toUpperCase(kataArr[i+1])
        console.log(kataArr[i+1]);
    }
}

console.log(kataArr.join(""))


//solusi dari instructor

let targetCapitalize = "hello world";
let resultCapitalize = "";

for(let i = 0; i < targetCapitalize.length; i++) {
    if (i=== 0 || targetCapitalize[i-1] === " ") {
        resultCapitalize += targetCapitalize[i].toUpperCase();
    } else {
        resultCapitalize += targetCapitalize[i]
    }
}

console.log (resultCapitalize);