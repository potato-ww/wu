let a=""
for(let i=1;i<=4;i++){
    for(let z=1;z<=i;z++){
        a=a+"*" 
    }
    a=a+'\n'
}
console.log(a)

let b=""
for(let i=1;i<=4;i++){
    for(let z=1;z<=4-i;z++){
        b=b+"*" 
    }
    b=b+'\n'
}

console.log(b)