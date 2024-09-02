//Write a function to get the lowest, highest and average value in the array (with and without sort function).

// function sortArrWithFunc (checkArr) {
// //    for (let i = 0 ; i < (checkArr.length -1) ; i++) {

// //    }
//     checkArr.sort((a,b) => a - b)
    
//     let average = 0;
//     for (let i = 0 ; i <= (checkArr.length -1) ; i++) {
//         average += checkArr[i]; 
//     }
//     let averageValue = average / checkArr.length 
//     let result = console.log(`lowe value is ${checkArr[0]} and higest value is ${checkArr[checkArr.length -1]} , average value is ${averageValue}`)
//     return result
// }

// console.log(sortArrWithFunc ([5,4,10,2,1]))

function sortArrWithoutFunc (checkArr) {

    let sortedArr = manualSortFunc(checkArr);

    let average = 0;
    for (let i = 0 ; i <= (sortedArr.length -1) ; i++) {
        average += sortedArr[i]; 
    }
    let averageValue = average / sortedArr.length 

    console.log(console.log(`lower value is ${sortedArr[0]} and higest value is ${checkArr[sortedArr.length -1]} , average value is ${averageValue}`))

    
        function manualSortFunc (checkArr) {
            for (let h = 0 ; h<= (checkArr.length-1) ; h++) {
                for (let i = 0 ; i<= (checkArr.length-1) ; i++) {
                    if (checkArr[i] > checkArr[i+1]) {
                        let temp = checkArr[i]
                        checkArr[i] = checkArr[i+1]
                        checkArr[i+1] = temp
                    }
                }
            }
            return checkArr;
        }

        return sortedArr
}

sortArrWithoutFunc ([5,4,10,2,1])


