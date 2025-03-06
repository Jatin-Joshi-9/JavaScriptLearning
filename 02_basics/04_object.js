// const tinderUser={}
// let tUser=new Object();
// tUser.name="jatin";
// tUser.age=21;
// tUser.location="Jaipur";
// tUser.email="JatinJoshi@juetguna.in";
// tUser.isLoggedIn=true;

// const regularUser={
//     email: "jatin@vscode.com",
//     fullName:{
//         userFullname:{
//             firstName: "Jatin",
//             lastName: "Joshi",
//         }
//     }
// }
// console.log(regularUser.fullName?.userFullname?.firstName);

// const objext1={1: "a", 2: "b", 3: "c"};
// const objext2={5: "a", 6: "b", 7: "c"};
// // const object3={objext1, objext2};
// const object3=Object.assign({},objext1, objext2);
// console.log(object3);

// const object4={...objext1, ...objext2};


const users=[
    {
        id: 1,
        name: "Jatin",
        age: 21,
        location: "Jaipur",
    },
    {
        id:2,
        name: "Rahul",
        age: 22,
        location: "Delhi",
    }
]
console.log(Object.entries(users[0]));