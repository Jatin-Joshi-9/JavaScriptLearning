// const dc_heros= ['Batman', 'Superman',]
// dc_heros.push('Wonder woman');

// //Why we can change the value of const variable dc_heros?
// //reason: const is a reference to the array, not the array itself. So, we can change the value of the array, but we can't change the reference of the array.
// //If we try to change the reference of the array, it will throw an error. LIKE for example:
// dc_heros.push('Flash', 'Green Lantern')
// console.log(dc_heros);

// const marvel_heros = ['Ironman', 'Captain America', 'Thor', 'Hulk'];
// const newHeroes=[...marvel_heros,...dc_heros,"blackPanther"]
// console.log(newHeroes);

console.log(Array.isArray("Jatin_Joshi"));
console.log(Array.from("Jatin"));
console.log(Array.from({name: "Jatin", age: 21}));


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1, score2, score3));