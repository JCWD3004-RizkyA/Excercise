// Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02 03 
// 04 05 06 
// 07 08 09 10


function trianglePattern (n) {
    let result = "";
    let container = 1 ;
    for (let i = 1 ; i <=n ; i++) {
      
        for (let j = 1 ; j <= i ; j++) {
            result = result + container.toString()
            container++
            if (container <=10) {
                process.stdout.write ("0" + result + " ")
                result =""
            } else {
                 process.stdout.write (result)
                 result =""
            }
          
         }
         console.log();
}
}
trianglePattern(4);

function trianglePattern (n) {
    let result = "";
    let container = 1 ;
    for (let i = 1 ; i <=n ; i++) {
      
        for (let j = 1 ; j <= i ; j++) {
            result = result + container.toString()
            container++
            if (container <=10) {
                process.stdout.write ("0" + result + " ")
                result =""
            } else {
                 process.stdout.write (result)
                 result =""
            }
          
         }
         console.log();
}
}
trianglePattern(4);

//solution
function createTriangle(height) {
    let number =1;
    for (let i =1 ; i <= height ; i++) {
        let row = "";
        for (let j = 1; j<= i; j++ ) {
            row += (number < 10 ? "0" : "") + number + " ";
            number ++;
        }
        console.log(row.trim())
    }
}
createTriangle(4)