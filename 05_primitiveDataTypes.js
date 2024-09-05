//Based on the array below write a function that will return primitive data types only.
//let arr = [1, [], undefined, {}, "string", {}, []];
//a. The function will return [1, undefined, “string”]

let test = [1, [], undefined, {} , "string" , {} , []];

// console.log("this is + " +typeof test[1])

function primitiveDataTypes (arr) {
    let sampleNumber = 1
    let sampleString = "string"
    let sampleUndefined = undefined
    let sampleNull = null;
    let sampleBoolean = true; 
    let sampleArray = [];
    let sampleObject = {};

    let isPrimitive = false;

    let result = [];

    for (let i = 0 ; i <= (arr.length-1) ; i++) {
        // if (typeof arr[i] == typeof sampleNumber || typeof arr[i] == typeof sampleString 
        //     || typeof arr[i] == typeof sampleUndefined 
        //     || typeof arr[i] == typeof sampleNull 
        //     || typeof arr[i] == typeof sampleBoolean
        //     ) {
        //     result.push(arr[i])
        // } else 
        
        if (typeof arr[i] == 'object') {
        
            isPrimitive = false;
        } else if (typeof arr[i] == typeof sampleNumber || typeof arr[i] == typeof sampleString 
                 || typeof arr[i] == typeof sampleUndefined 
                 || typeof arr[i] == typeof sampleNull 
                 || typeof arr[i] == typeof sampleBoolean
            ) {
                isPrimitive = true;
            }

        if(isPrimitive) {
            result.push(arr[i])
        }
        
    }

    return result;
}

console.log(primitiveDataTypes(test))

