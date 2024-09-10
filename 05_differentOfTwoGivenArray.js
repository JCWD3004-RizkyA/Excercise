//Write a function to find the difference in 2 given array
//a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7]

function findDifference (arr1, arr2) {
    let arrCompare =[];
    for (let i = 0 ; i <= (arr1.length-1) ; i++) {
        for (let j = 0 ; j <= (arr1.length-1) ; j++) {
            if (arr1[i] === arr2[j]) {
                arrCompare.push(arr1[i])
            }
        }
    }

    //arrCompare= [3,4,5] : Nyari array yang sama dikedua arr1 dan arr2     

   
        for (let k = 0 ; k< (arr1.length) ; k++) {
            for (let l = 0 ; l <=(arr1.length) ; l++ ) {
                if (arrCompare[k] === arr1[l] )
                    arr1.splice(l,1);
            }
       
        }
        console.log("this is arr1 after substract = " + arr1)
        
        //untuk arr2
        for (let m = 0 ; m < (arr2.length) ; m++) {
            for (let n = 0 ; n <=(arr2.length) ; n++ ) {
                if (arrCompare[m] === arr2[n] )
                    arr2.splice(n,1);
            }
       
        }
        console.log("this is arr2 after substract = " +arr2)

        let arrCompareArr = arr1.concat(arr2);


        return arrCompareArr
}

console.log(findDifference([1, 2, 3, 4, 5] , [3, 4, 5, 6, 7] ))