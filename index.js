const loaf = {
    floor: 300,
    water: 210,
    hydration() {
        console.log(100 * (loaf.water / loaf.floor))
    }
}

console.log(loaf.floor)
console.log(loaf.water)
loaf.hydration()

const me = { 
    fu: 'fu',
    bar: 'bar',
    fum: 'fum',
    quux: 'quux',
    spam: 'spam'
    
}

for (key in me) {
    console.log(key)
}

const hobbits = {
    meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}

console.log(hobbits.meals[3])

const obj1 = {
    name: 'Seyi',
    job: 'software engineer',
    boss: 'sara'
}

const obj2 = {
    name: 'abdu',
    job: 'football player',
    boss: 'kevin'
}

const obj3 = {
    name: 'liya',
    job: 'owner'
}

let arr1 = [obj1, obj2, obj3]

for (obj in arr1) {
    if(arr1[obj].boss === undefined) {
        console.log(`${arr1[obj].job} ${arr1[obj].name} doesn't report to anybody.`)
    }
    else {
        console.log(`${arr1[obj].job} ${arr1[obj].name} reports to ${arr1[obj].boss}.`)
    }
}

let encoded = { a: 2, b: 3, c: 4, d: 5, };

function decode(word) {
    if (Object.keys(encoded).includes(word[0])) {
        return word[encoded[word[0]] - 1];
    }
    else {
        return ' ';
    }
}


function decodeWords(phrase) { let ans = ''; let copy = phrase.split(' ');

    copy.forEach(word => {
        ans = ans.concat(decode(word));
    });
    return ans;
    }

console.log(decodeWords('craft block argon meter bells brown croon droop'));
console.log(decode('cycle'));


function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
      name,
      nickname,
      origin,
      attack,
      defense,
      describe: function() {
          console.log(`${name} is a ${race} from ${origin}.`)
      }
      evaluateFight: function(opattack, opdefence) {
         let opdamage = 0
         let youdamage = 0
         if(opattack - defence > 0) {
             youdamage = opattack -defence
         }
         if(attack - opdefence > 0) {
             opdamage = attack - opdefence
         }
          return `Your opponent takes ${opdamage} damage and you receive {youdamage} damage`
      }
  };
}

let character1 = createCharacter('Gandalf the White', 'gandalf', 'Wizard','Middle Earth', 10, 6)
let character2 = createCharacter('Bilbo Baggins', 'bilbo', 'Halfling','The Shire', 2, 1)
let character2 = createCharacter('Frodo Baggins', 'frodo', 'Halfling','The Shitre', 2, 1)

let characters = [character1, charcter2, character3]