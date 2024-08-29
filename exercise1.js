// print perkalian
let n = 5
for (let i = 1 ; i <= 10 ; i++) {
    for (let j = 1 ; j <= 10 ; j++ ) {
        let hasilPerkalian = n*i;
        console.log ( `${n} * ${i} = ${hasilPerkalian}`)
        break;
    }
}