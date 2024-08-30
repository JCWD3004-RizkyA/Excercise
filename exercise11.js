//Write a code to change every letter a into * from a string of input

let input = "An apple a day keeps the doctor away"

inputArr = input.split("");
console.log (inputArr)

for (let i = 0 ; i <=(inputArr.length-1) ; i++)  {
    if (inputArr[i] === "a" || inputArr[i] === "A") {
        console.log('ketemu huruf a')
        // inputArr [i] = "*"
        inputArr.splice( i , 1 , "*")
        console.log (inputArr)
    }
}

console.log (inputArr.join(""))