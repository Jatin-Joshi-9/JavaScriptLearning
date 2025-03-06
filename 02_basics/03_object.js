//Singleton Object
// Object is a collection of key value pairs
// Objext literals

const jj=Symbol("Jatin");
const jsUser={
    name :"Jatin",
    age: 21,
    [jj]:"This is a symbol",
    location:"Jaipur",
    email: "Jatin@google.com",
    isLoggedIn: true,
    lastLoginDay: ["Monday", "Tuesday", "Wednesday"],
    "fullnamme": "Jatin Harishbhai Joshi",
}

console.log(jsUser);
console.log(jsUser.name);
console.log(jsUser["fullnamme"]);
console.log(jsUser[jj]);




jsUser.greeting=function(){
    console.log(`Hello ${this.name}, How was the day?`);
}
console.log(jsUser.greeting());