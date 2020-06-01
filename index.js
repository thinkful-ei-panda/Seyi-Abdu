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
    },

    {
        name: "Seyi",
        jobTitle: "Pair"
    },

    {
        name: "Jenna",
        jobTitle: "Intern"
    },
];


object3.forEach(element => {
    console.log(element);
});