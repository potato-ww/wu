function mean(a,b,c){
    return (a+b+c)/3
}
let a=mean(1,2,3)
console.log(a)

//第一题
function mean1(){
    sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i]
    }
    return sum/arguments.length
}
let a=mean1(1,2,3,4)
console.log(a)

//第二题
function mean2(num){
    const sum=num.reduce((sum,curVal)=>sum+curVal)/num.length;
    return sum;
}
let a=mean2([1,2,3,4])
console.log(a)

//第三题
const arr=[1,2,3,4,24];
const arr1=arr.map(
    (x)=>{
        if(x%2==0){
            return x;
        }
    }
);
const arr2=[];
arr1.forEach(
    item=>{
        if(item){
            arr2.push(item)
        }
    }
)

function mean3(num){
    const sum=num.reduce((sum,curVal)=>sum+curVal)/num.length;
    return sum;
}
let a=mean3(arr2);
console.log(a)
