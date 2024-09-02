//cara pertama

// let num = 1000;

// let converted = new Intl.NumberFormat("id-ID" , {style : "currency" , currency : "IDR"}).format(num)

// let numStringed = String(converted);
// console.log(numStringed);

//cara kedua



// if ( angka / 10  <= 1 ) {
//     console.log (`Rp.${angka},00`)
// } else if (angka / 10 <= 10) {
//     console.log (`Rp.${angka},00`)
// } else if (angka / 10 <= 100) {
//     console.log (`Rp.${angka},00`)
// } else if (angka / 10 <= 1000) {
//     let angkaToString = String(angka);
//     console.log (angkaToString);
//     console.log (`Rp.${angka/1000}.${angkaToString[1]}${angkaToString[2]}${angkaToString[3]}`)
// }

//peringkasan 
let angka = 12345678;
let currency ="";
let angkaConvertString = String(angka);
let penempatanKoma = 0;
// console.log (angkaConvertString.length);
//2000
if ( angka / 10  <= 100 ) {
    console.log (`Rp.${angka},00`)
} else {
        for (let j = angkaConvertString.length ; j > 0 ; j-- ) {
            currency = angkaConvertString[j-1] +currency; //ingat sifat string yang ditambahkan
            console.log(currency); //tes apakah bisa diprint satusatu dan benar
            penempatanKoma ++;
            console.log(`ini adalah penempatan koma ke ${penempatanKoma}`) //tes penempatan koma ke character berapa

            if(penempatanKoma % 3 == 0) {
                currency = "." + currency
            }
    
        }

    }

    console.log(convertedCurrency = `Rp. ${currency}.00`)


    



