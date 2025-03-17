
let array=new Array();

function calculatePrice(...num){
    array.push(...num);
    return SumTotal(array);
}
function SumTotal(array){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum += array[i];
    }
    return `Total Price: ${sum}`;
}
console.log(calculatePrice(100,120,500,300));

