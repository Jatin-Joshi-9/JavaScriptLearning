const myArr= [1, 2, 3, 4, 5];
console.log(myArr);
console.log(myArr.length);
console.log(myArr[0]);
//When you copy an array to another array, it will not copy the array, it will copy the reference of the array called as shallow copy of the array
// and Deep copy is when you copy the array to another array, it will copy the array, not the reference of the array

const myHeroees = ["Ironman", "Captain America", "Thor", "Hulk"];
const myArr2 =new Array(1, 2, 3, 4, 5);
myArr2.push(6);
console.log(myArr2);