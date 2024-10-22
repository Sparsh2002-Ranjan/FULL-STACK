function fun1(){
    let a=10;
    let b=20;

    function fun2(){
        let c=30;
        function fun3(){
            return a+b+c;
        }
        return fun3;
    }
    return fun2;
}
console.log(fun1());
console.log(fun1()());
console.log(fun1()()());


//ARROW FUNCTION :-
function fun4(){
    let a=30;
    let b=30;
    return () => {
        let c=30;
        return () => {
            return a+b+c;
        }
    }
}
console.log(fun4());
console.log(fun4()());
console.log(fun4()()());


let person = {
    name : "sparsh",
    age : 22,
    education : "B.Tech"
}

for(let idx in person){
    console.log(person[idx]);
}

let arr=[1,2,3,4,5,6];
function mymap(item){
    return item*3;
}
let newarr=arr.map(mymap);
console.log(newarr);

let newwarr=arr.map((item) => {
    return item*4;
})
console.log(newwarr);

let newwarrr=arr.map(item => item*5);
console.log(newwarrr);


//filter
let filarr = arr.filter(item => (item%2 == 0));
console.log(filarr);


//reduce
let arr1=[10,20,30,40,50]
let arr2=arr1.reduce((acc,curvalue)=>{
    acc=acc+curvalue;
    return acc;
},0)
console.log(arr2);


//FOREACH
let aa=arr1.forEach((item) => item*2);
console.log(aa);


//  Q - IN A GIVEN ARRAY FILTEROUT THE ODD ELEMENTS AND DOBLE THE VALUE OF THEM THEN RETURN THE SUM OF IT ?
let sr=[15,19,20,22,18,13,16,11];
let sr1=sr.filter((item)=>item%2);
let sr2=sr1.map((item)=>item*2);
let sr3=sr2.reduce((acc,calval)=>{
    acc=acc+calval;
    return acc;
},0);
console.log(sr3);
let sr4=sr.filter((item)=>item%2).map((item)=>item*2).reduce((acc,calval)=>{
    acc=acc+calval;
    return acc;
},0);
console.log(sr4);