//Create a function to calculcate body mass index
//( 18.5 <= x && x >= 24.9 ) 

function BMI (weight , height) {
    let bmi = Number((weight / ((height/100)*(height/100))).toFixed(1));
    let x = bmi
    let result = ""
    console.log(typeof bmi)
    console.log (bmi)

    if (x <18.5) {
        return result += "less weight"
    } else if ( x >= 18.5 && x <= 24.9) {
        return result +="ideal"
    } else if (x >= 24.9 && x <= 29.9) {
        return result +="overwight"
    } else if (30.0 >= x <= 39.9) {
        return result +="very overwight"
    } else if ( x > 39.9) {
        return result +="obesity"
    }
 return console.log(result)
}

console.log(BMI (70 , 175));