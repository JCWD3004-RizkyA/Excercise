//cara pertama

// let num = 1000;

// let converted = new Intl.NumberFormat("id-ID" , {style : "currency" , currency : "IDR"}).format(num)

// let numStringed = String(converted);
// console.log(numStringed);

//cara kedua

let angka = 2000;

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
if ( angka / 10  <= 100 ) {
    console.log (`Rp.${angka},00`)
} else if (angka / 10 >= 100) {
    let angkaToString = String(angka);
    console.log (angkaToString);
    console.log (`Rp.${angka/1000}.${angkaToString[1]}${angkaToString[2]}${angkaToString[3]}`)
}
