const loaf = {
    floor: 300,
    water: 210,
    hydration() {
        console.log(100 * (loaf.water / loaf.floor))
    }
}

console.log(loaf.floor)
console.log(loaf.water)
console.log(loaf.hydration)

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

    