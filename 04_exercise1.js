// Create a function that can create a triangle pattern according to the height we provide like the following :
// 1
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5


function trianglePattern (n) {
    let result = "";
    for (let i = 1 ; i <= n ; i++) {
        for (let j = 1 ; j <= n ; j++) {
            result += i
            console.log(result)
            break;
        }
    }
}

trianglePattern(4);