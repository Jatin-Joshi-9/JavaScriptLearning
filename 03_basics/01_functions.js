// function sayMyName(name){
//     console.log("My name is: " + name);
// }

// sayMyName("Jatin Joshi");

// function addTwoNumbers(number1, number2){
//     return number1+number2;
// }
// console.log(addTwoNumbers(10, 5));

function loginUserMessage(username="At least sam"){
    if(username===undefined){
        console.log("Please provide a username");
        }
        else{
            return `Welcome ${username}`;
        }
       return `code executed successfully`;
}
console.log(loginUserMessage());