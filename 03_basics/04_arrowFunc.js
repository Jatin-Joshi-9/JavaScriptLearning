// const user={
//     username: "ironhacker",
//     password: "password123",

//     welcome: function(){
//         console.log("Hello, I am " + this.username);
//     }   
// }

// user.welcome(); 
// user.username="jatin joshi";// Hello, I am ironhacker
// user.welcome(); // Hello, I am jatin joshi



// function teach(){
//     console.log(this.username);
// }

// teach(); // window object

const jj= (num1,num2)=> ({sum:num1+num2});

console.log(jj(2,3)); // 5