//Write a conditional statement to sort three numbers Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42

let num1 = 42
let num2 = 27
let num3 = 18
let Ans = [num1 , num2 , num3];
let temp = 0;

console.log(Ans)

for (let i = 1 ; i < 3 ; i++) {
    if (Ans[i] > Ans[i+1]) {
        temp      = Ans[i] ;
        Ans[i]    = Ans [i+1]
        Ans [i+1] = temp ;
        console.log (Ans)
    }
}
