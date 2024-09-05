let Student = [{
    Name : "Joni",
    Email : "joni@gmail.com" ,
    Age   : "01-01-1995",
    score : 90
},{
    Name : "Jon0",
    Email : "jono@gmail.com" ,
    Age   : "01-01-1990",
    score : 91
} ,{
    Name : "Jane",
    Email : "jane@gmail.com" ,
    Age   : "01-01-1990",
    score : 89
} , {
    Name : "JonJon",
    Email : "jonjon@gmail.com" ,
    Age   : "01-01-1989",
    score : 50 
}]

// console.log(Student)
// console.log (Student[0].score)
// console.log (Student[1].score)
// console.log (Student[2].score)
// console.log (Student[3].score)

function findAverage () {
    let allScore = 0;
    let allScoreArr = [];
    for (let i = 0 ; i <= (Student.length-1) ; i++) {
        allScore = allScore + Student[i].score
        avgScore = allScore /(Student.length)
        allScoreArr.push(Student[i].score);
    }
    
    allScoreArr.sort((a ,b) => a - b)

    //return "Avg Score is = " + avgScore + " Lowest is = " + allScoreArr[0] + " Highest is = " +  allScoreArr[Student.length-1];  
    // console.log("avg Score is = " , avgScore)
    // console.log ("Arr Score is = " , allScoreArr)
    // console.log("Lowest Score is = " , allScoreArr[0])
    // console.log("Higest Score is = " , allScoreArr[Student.length-1])

    return Score = {
        Highest : allScoreArr[Student.length-1],
        Lowest : allScoreArr[0],
        Average : avgScore
    }
}

function findAge () {
    let current = new Date();
    let age = [];
    let ageStudent;
    let usia =0;


    for (let i = 0 ; i <= (Student.length-1) ; i++) {
        ageStudent = new Date(Student[i].Age); // umur setiap student dalam ms
        usia = (current - ageStudent) /(1000*60*60*24*365)
        usia = Math.floor(usia)
        console.log (usia)
        age.push(usia)
        console.log(age)
    }

    //hitung rata2
    let yearSum = 0;
    let avgyear ;

    for (let h = 0 ; h <= (Student.length-1) ; h++){
        yearSum = yearSum + age[h]
        avgyear = yearSum/Student.length
        console.log("average of year is" + avgyear)
    }

    age.sort((a,b) => a -b )

        // return "Avg Year = " +  + " Youngest is = " + age[0] + " oldest is = " +  age[Student.length-1];  
        return Umur = {
            OldestAge : age[Student.length-1],
            YoungestAge : age[0],
            AverageAge : avgyear
        }

}

function ScoreAge(Student) {
    findAverage(Student)
    findAge(Student)

    return {...Umur, ...Score}
}

console.log(ScoreAge(Student))





