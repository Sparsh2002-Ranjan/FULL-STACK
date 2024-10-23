const sum = () => {
    return new Promise((resolve,reject)=>{
        let a=20;
        let b=30;
        if(a+b>55){
            return resolve(a+b);
        }else{
            return reject("sum of a & b is less than 55")
        }
    })
}

let p= new Promise((resolve,reject)=>{
    let a=20;
    let b=30;
    if(a+b>55){
        return resolve(a+b);
    }else{
        return reject("sum of a & b is less than 55")
    }
})

//consumer

p.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("code execute every time");
})

sum(30,40).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("code execute every time");
})

const sum1 = () => {
    return new Promise((resolve,reject)=>{
        let a=20;
        let b=30;
        if(a+b>55){
            return resolve(new Promise(()=>{
                console.log(a+b);
            }))
        }else{
            return reject("sum of a & b is less than 55")
        }
    })
}

sum1(30,40).then((res)=>{
    console.log(res);
}).then(()=>{

}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("code execute every time");
})


//fetch

fetch("https://google.com").then((res)=>{
    return res.json;
}).then(()=>{
    console.log(res);
})