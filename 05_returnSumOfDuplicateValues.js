//Write a function from the below array of number that will return sum of duplicate values.
let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10 ];
//a. The function will return 40

function duplicateSum (arr) {
    let readyToSum = duplicateIs(arr) ;
    console.log(readyToSum);
    console.log ("This is inside array type of =" + typeof readyToSum[2]) //number
    let sum = 0 ;
    console.log ("This is type of sum = " + typeof sum)

    for (let i = 0 ; i <=(readyToSum.length-1) ; i++) {
        console.log ("this is type of i = " + typeof i)
        console.log ("this is type of sum dalam loop = " + typeof sum)
        sum  = sum + readyToSum[i]
        parseInt(sum)

        console.log(sum)
    }
    return sum;
}



function duplicateIs(arr) {
    let howMany = [];
    for (let i = 0  ; i <= (arr.length-1) ; i++) {
        // console.log(arr[i])
        for (let j = 0 ; j <= (arr.length-1) ; j++) {
            // console.log(arr[j]) 
            if ((arr[i] === arr[j])) { //jangan sampaii dia menyamakan dengan array element dia sendiri pakai if berikutnya
                if (i !== j) {           // 1 sama dengan 1, 1 sama dengan 2, 1 sama dengan 2 ?
                    howMany.push(arr[i])
                    // console.log (howMany)
                    break;
                }

            }
        }
    }

    return howMany
}

console.log(duplicateSum(arr))


//solution from instructor

//menghitung jumlah kemunculan setiap kali looping
for (let i = 0 ; i < arr.length; i++) {
        if(seen[arr[i]]) {
            seen[arr[i]]++;
            console.log(seen);
        } else {
            seen[arr[i]] =1
        }

        for (let key in seen) {
            if (seen[key] >1) {
                sum += Number(key) * seen[key];
            }
        }
        return sum;

    }

    let arr2 = [10,20,40,10,50,30,10,60,10];
    console.log(sumOgDuplicates(arr2));



