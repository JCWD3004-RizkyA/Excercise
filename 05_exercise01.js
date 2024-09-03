//Write a function to get the lowest, highest and average value in the array (with and without sort function).

function sortArrWithFunc (checkArr) {

    checkArr.sort((a,b) => a - b)
    
    let average = 0;
    for (let i = 0 ; i <= (checkArr.length -1) ; i++) {
        average += checkArr[i]; 
    }
    let averageValue = average / checkArr.length 
    let result = console.log(`lowe value is ${checkArr[0]} and higest value is ${checkArr[checkArr.length -1]} , average value is ${averageValue}`)
    return result
}

console.log(sortArrWithFunc ([5,4,10,2,1]))

//=========================================================================================================
function sortArrWithoutFunc (checkArr) {

    let sortedArr = manualSortFunc(checkArr);

    let average = 0;
    for (let i = 0 ; i <= (sortedArr.length -1) ; i++) {
        average += sortedArr[i];  //penjumlahan seluruh angka 
    }
    let averageValue = average / sortedArr.length  //pembagian seluruh angka dengan jumlah angka nya (rata2)

    console.log(console.log(`lower value is ${sortedArr[0]} and higest value is ${checkArr[sortedArr.length -1]} , average value is ${averageValue}`))

    
        function manualSortFunc (checkArr) {
            for (let h = 0 ; h<= (checkArr.length-1) ; h++) {
                for (let i = 0 ; i<= (checkArr.length-1) ; i++) {
                    if (checkArr[i] > checkArr[i+1]) {
                        let temp = checkArr[i]         //simpen yang mau dirubah ke tempat sementara
                        checkArr[i] = checkArr[i+1]    // masukin i+1 ke i
                        checkArr[i+1] = temp           // masukin tem ke i+1
                    }
                }
            }
            return checkArr;
        }

        
}

sortArrWithoutFunc ([5,4,10,2,1])


