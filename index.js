let loaf = {
    flour: 300,
    water: 210,

    hydration: function () {
        return (this.water / this.flour * 100);
    },

};

console.log(loaf.flour);

let object1 = {
    foo: 1,
    bar: "Hello",
    fum:2,
    quux:"World",
    spam:"!"
};

for (let property in object1) {
    console.log(property + ": " + object1[property]);
}

let object2 = {
    meals: ['breakfast', 'second breakfast', 'elevenses',
        'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(object2.meals[3]);

let object3 = [
    {
        name: "Abdu",
        jobTitle: "Engineer",
        boss: "Steph",
    },

    {
        name: "Seyi",
        jobTitle: "Pair",
        boss: "Steph",
    },

    {
        name: "Jenna",
        jobTitle: "Intern",
        boss: "Steph",
    },

    {
        name: "Steph",
        jobTitle: "Owner"
    }
];


object3.forEach(element => {

    if (element.boss === undefined) {
        console.log(`${element.jobTitle} ${element.name} doesn't report to anybody.`);
    } else {
        console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}.`);
    }
});

let encoded = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
};

function decode(word) {

    if (Object.keys(encoded).includes(word[0])) {
        return word[encoded[word[0]] - 1];
    }
        return ' ';
    
}

console.log(decode('cycle'));

function decodeWords(phrase) {
    let ans = '';
    let copy = phrase.split(' ');

    copy.forEach(word => {
        ans = ans.concat(decode(word));
    });
    return ans;
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));


function createCharacter(name, nickname, race, origin, attack, defense) {

    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,

        describe: function() {
            console.log(`${name} is a ${race} from ${origin}`);
        },

        evaluateFight(opponent) {
            let x = this.attack - opponent.defense;
            let y = opponent.attack - this.defense;

            if (opponent.defense > this.attack) {
                y = 0;
            }

            if (this.defense > opponent.attack) {
                x = 0;
            }

            console.log(`Your opponent takes ${x} damage and you recieve ${y} damage.`);
        }

    };
}




let characters = [
    gandalf = createCharacter("Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6),
    bilbo = createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1 ),
    frodo = createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2),
    aragorn = createCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8),
    legolas = createCharacter("Legolas", "legolas", "Elf", "Woodland Realm", 8, 5),

];

characters.push(arwen = createCharacter("Arwen Undomiel","arwen", "Half-Elf", "Rivendell"));

characters.find(found => {
    return found.nickname === 'aragorn';
}).describe();

let x = characters.filter(character => {
    return character.race === 'Hobbit';
});

console.log(x);

x = characters.filter(character => {
    return character.attack > 5;
});

console.log(x);




// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | "Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6        |
// -----------------------------------------------------------------------------------------------
// | "Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1        |
// -----------------------------------------------------------------------------------------------
// | "Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2        |
// -----------------------------------------------------------------------------------------------
// | "Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8        |
// -----------------------------------------------------------------------------------------------
// | "Legolas", "legolas", "Elf", "Woodland Realm", 8, 5        |
// -----------------------------------------------------------------------------------------------