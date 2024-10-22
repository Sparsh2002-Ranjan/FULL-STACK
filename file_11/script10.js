const arr=[1,2,3,4,5,6,1,2,3,4,5,6];
console.log("hello");
console.log(arr);
const person = {
    name : "SR",

}
person.greeting = function(){
    console.log("hello everyone");
}
person.greeting();
function sum(a, b) {
    console.log(a+b);
}
console.log(sum(4,6));

function sum1(a, b) {
    return a+b;
}
console.log(sum1(4,6));

console.log(mul(4,6));
function mul(a, b) {
    console.log(a*b);
}
const sub = (a,b) =>{
    return a-b;
}
const a=sub(6,3);
console.log(a);
console.log(sub(6,3));