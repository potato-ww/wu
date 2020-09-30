let mike=[89,120,103];
let john=[116,94,123];
let sum1=0;
let sum2=0;
for(let i in mike){//遍历数组
    let a=mike[i];//把数组元素存在a里
    sum1=sum1+a   
}
mikeSum=sum1/mike.length
console.log("mike队的平均分是"+mikeSum);
for(let g in john){//遍历数组
    let a=john[g];//把数组元素存在a里
    sum2=sum2+a
    
}
johnSum=sum2/john.length//john.lenght数组长度
console.log("john队的平均分是"+johnSum);

let y=( johnSum > mikeSum ? "john以"+johnSum +"的分获胜": "mike以"+mikeSum+"的分获胜");
console.log(y);


if(johnSum>mikeSum){
    console.log("john获胜");
}else if(johnSum<mikeSum){
    console.log("mike获胜");
}else{
    console.log("并列第一");
}


let mary=[97,134,105];
let sum3=0;
for(let f in mike){//遍历数组
    let a=mike[f];//把数组元素存在a里
    sum3=sum1+a   
}
marySum=sum3/mary.length
console.log("mary队的平均分是"+marySum);
if(johnSum>mikeSum&&johnSum>marySum){
    console.log("john获胜");
}else if(mikeSum>johnSum&&mikeSum>marySum){
    console.log("mike获胜");
}else if(marySum>johnSum&&marySum>mikeSum){
    console.log("mary获胜");
}else if(johnSum=mikeSum=marySum){
    console.log("并列第一");
}else if(johnSum=mikeSum>marySum){
    console.log("johnhemike并列第一");
}else if(johnSum=marySum>mikeSum){
    console.log("john、mary并列第一");
}else{
    console.log("mike、mary并列第一");
}
