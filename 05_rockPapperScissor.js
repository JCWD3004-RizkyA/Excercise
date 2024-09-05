//Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick
//between rock, paper, or scissor.
//a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

function rockPaperScissor(yourChoise) {

    let player = 0;

    if (yourChoise === "rock") {
        player = player + 1;
    } else if (yourChoise === "scissor"){
        player = player + 2;
    } else if (yourChoise === "paper") {
        player = player + 3;
    }
    console.log ("player adalah " + yourChoise +" dalam angka adalah = " + player)

    // 3 itu paper
    let Enemy = (1 + Math.floor(Math.random() * 3));
    console.log ("musuh dalam angka adalah = " +Enemy)

    let enemy = ""
    
    if (Enemy === 1 && player === 1 ){
        let enemy = "rock"
        console.log("Musuh adalah Rock")
        return "Draw"
    } else if (Enemy === 1 && player === 2) {
        let enemy = "rock"
        console.log ("Musuh adalah Rock")
        return "Lose"
    } else if (Enemy === 1 && player === 3) {
        let enemy = "rock"
        console.log ("Musuh adalah Rock")
        return "Win"
    } else if (Enemy === 2 && player === 1) {
        let enemy = "scissor"
        console.log ("Musuh adalah Rock")
        return "Win"
    } else if (Enemy === 2 && player === 2) {
        let enemy = "scissor"
        console.log ("Musuh adalah Scissor")
        return "Draw"
    } else if (Enemy === 2 && player === 3) {
        let enemy = "scissor"
        console.log ("Musuh adalah Scissor")
        return "Lose"
    } else if (Enemy === 3 && player === 1) {
        let enemy = "paper"
        console.log ("Musuh adalah Paper")
        return "Lose"
    } else if (Enemy === 3 && player === 2) {
        let enemy = "paper"
        console.log ("Musuh adalah Paper")
        return "Win"
    } else if (Enemy === 3 && player === 3 ) {
        let enemy = "paper"
        console.log ("Musuh adalah Paper")
        return "Draw"
    }
   
}

console.log(rockPaperScissor("rock"))