class Hero  {
    constructor (name, nickname, Hp) {
        this.Name = name;
        this.Nickname = nickname;
        this.Hp = Hp;
    }
}

class Mage extends Hero {
    constructor (name, nickname, Hp, magicPower) {
        super (name,nickname,Hp)
        this.MagicPower = magicPower; 
    }

    getHeroInfo() {
        return 'Mage Hero -  Name ' + this.Name + 'Type : ' + this.Nickname + 'Physical Defense : ' + this.MagicPower;
    //     return {
    //     name        : this.Name,
    //     nickname    : this.Nickname,
    //     Hp          : this.Hp,
    //     magicPower  : this.MagicPower
    //    }

    }
}

class Warrior extends Hero {
    constructor (name, nickname, Hp, physicalDefense) {
        super (name,nickname,Hp)
        this.PhysicalDefense = physicalDefense;
    }

    getHeroInfo() {
        return 'Warrior Hero -  Name ' + this.Name + 'Type : ' + this.Nickname + 'Physical Defense : ' + this.PhysicalDefense;
        // return {
        //  name           : this.Name,
        //  nickname       : this.Nickname,
        //  Hp              : this.Hp,
        //  physicalDefense : this.PhysicalDefense
        // }
     }
}

const mageHero = new Mage('Eudora', 'Electric Mage' , 1500 , 500);
const warriorHero = new Warrior('Alucard' , 'Demon Hunter' , 2500 , 700);

console.log(mageHero.getHeroInfo());
console.log(warriorHero.getHeroInfo());


