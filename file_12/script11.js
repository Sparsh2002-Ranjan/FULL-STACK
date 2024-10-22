//High Order Function :-
function calc(a,b,sign,add,sub,mul,div){
    if(sign == "+"){
        console.log(add(a,b));
    }
    if(sign == "-"){
        console.log(sub(a,b));
    }
    if(sign == "*"){
        console.log(mul(a,b));
    }
    if(sign == "/"){
        console.log(div(a,b));
    }
}

// CallBack Functions :-
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}

calc(3,4,"*",add,sub,mul,div);