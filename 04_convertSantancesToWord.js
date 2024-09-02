//Write a function to split a string and convert it into an array of words
//○ Example : “Hello World” → [“Hello”, “World”]

function arrayWords (str) {
    let arr = [];
    let words =""
    
    for (let i =0 ; i <= (str.length) ; i++) {
        words = words + str[i];
        console.log(str[i])
        if (words[i] === " " ) {
            arr.push(words)
        } else if (words[i] === str.length) {
            arr.push(words)
        }

        words = ""

    }
    return arr
}

console.log(arrayWords("Hello Words"))