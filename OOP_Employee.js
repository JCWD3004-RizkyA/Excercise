class Employyee {
    constructor (name , age, salary) {
        this.Name = name;
        this.Age = age;
        this.Salary = salary;
    }
}

class Manager extends Employyee {
    constructor(name, age, salary, teamSize) {
        super(name , age, salary);
        this.TeamSize = teamSize;
    }

    getDetails() {
        return 'Manager -  Name ' + this.Name + 'Age : ' + this.Age + 'Salary : ' + this.Salary + 'Team Size = ' + this.TeamSize;
    }

    calculateBonus() {
        let baseBonus = 1000
        let bonus = this.TeamSize * baseBonus;

        return bonus;
    }
}


class Developer extends Employyee {
    constructor(name, age, salary) {
        super(name, age, salary);
        this.ProgrammingLanguage = '';
    }

    getDetails() {
        return 'Developer -  Name ' + this.Name + ' Age : ' + this.Age + ' Salary : ' + this.Salary + ' Available Programming Language : ' + this.ProgrammingLanguage;
    }


    addLanguage(lang) {
       return this.ProgrammingLanguage += lang +" "
    }
    
}

const manager = new Manager('Alice', 35, 8000, 5);
const developer = new Developer('Bob' , 28, 6000)
const developer2 = new Developer('Bab' , 27, 5000)
const developer3 = new Developer('Bib' , 25, 4000)
const developer4 = new Developer('Bub' , 24, 3000)
const developer5 = new Developer('john Doe' , 25, 2000)

developer.addLanguage('JavaScript');
developer.addLanguage('Phyton');

developer2.addLanguage('Java');
developer2.addLanguage('Phyton');

developer3.addLanguage('Java');
developer3.addLanguage('Ruby');

developer4.addLanguage('Phyton')

console.log(manager.getDetails());
console.log(developer.getDetails());
console.log(developer2.getDetails());
console.log(developer3.getDetails());
console.log(developer4.getDetails());


console.log(`Bonus for ${manager.name} : ${manager.calculateBonus()}`)



