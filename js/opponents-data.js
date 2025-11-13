// js/opponents-data.js
const opponents = [
    {
        id: 1,
        name: "Екатерина Марковна",
        maxHealth: 100,
        health: 100,
        money: 150,
        avatar: "👩‍💼",
        drops: [
            { name: "трава", chance: 10 },
            { name: "веревка", chance: 15 },
            { name: "money", min: 25, max: 37, chance: 100 }
        ]
    },
    {
        id: 2,
        name: "Сергеев Александр", 
        maxHealth: 120,
        health: 120,
        money: 200,
        avatar: "👨‍💼",
        drops: [
            { name: "вода", chance: 20 },
            { name: "бумага", chance: 15 },
            { name: "money", min: 30, max: 50, chance: 100 }
        ]
    }
];