//字面量
let a="",b='',c=``;//字符串字面量
let arr=[1,2,3]
let st={}

/*定义函数的四种方法 */
function sayHello(){
    console.log("hello1");
}//定义一个函数字面量
sayHello();

//函数表达
const sayHello=function(){
    console.log("hello2")
};//函数赋值给变量（匿名函数表达式）

const sayHello=function sayH(){
    console.log("hello3")
}//命名函数表达式

//function构造函数
const sayH=new Function(console.log("hello4"));

//es6 新增的语法 箭头函数
const sayH=()=>{console.log("hello5")}

const say=function{
    let a=1,b=3;
    let c=a+b;
    return c;
}
console.log(say());


//函数参数
const say=function(a,b){//形参
    return a+b;
}
console.log(say(2,3));//实参(空或一个参数)，打印出NEN=not a number，如果上传多个参数，取前两个

//
const say=function(a,b){//形参
    let a1=arguments.length;
    console.log(a1);
    console.log(arguments[3]);
    return a+b;
}
let a=say(1,2,3,4)
console.log(a)

const say=function(a,b){//形参
    sum=0;
    for(i=0;i<arguments.length;i++){
        sum=sum+arguments[i]
    }
    console.log(sum);
    return sum;
}
let a=say(1,2,3,4);
console.log(a);

//箭头函数下没有arguments函数
const say=(a,b)=>{
    sum=0;
    for(i=0;i<arguments.length;i++){
        sum=sum+arguments[i]
    }
    console.log(sum);
    return sum;
}
let a=say(1,2,3,4);
console.log(a);

//for...of...
const add=function(...number){
    let sum=0;
    for(const num of number){
        sum=sum+num;
    }
    return sum;
}
let a=add(1,2,3,4)
console.log(a);


//默认参数
const sayHi=function(stName='bb'){
    console.log(`hello,${stName}`)
}
sayHi();
sayHi("java")

//箭头函数
const add=(...number)=>{
    let sum=0;
    for(const num of number){
        sum=sum+num;
    }
    return sum;
}
let a=add(1,2,3,4)
console.log(a);


const say=function(a,b){//形参
    return a+b;
}
console.log(say(2,3));
//改箭头函数
const say=(a,b)=>a+b;
const say=()=>{return 3;}
const say =a=>a+1;
const say=function(a){
    return a+1;
}

//回调函数
function dance(){
    console.log("dance")
}

function sing(song,callback){
    console.log(`我在唱,${song}`);
    if((typeof callback)==='function'){
        callback();
    }
}
sing('歌',dance);
//改箭头函数callback
const dance=()=>{console.log("dance");}
const sing=(song,callback)=>{
    console.log(`我在唱${song}`);
    if((typeof callback)==='function'){
        callback();
    }
}
sing('歌',()=>(console.log("我在跳舞")));


//回调函数的应用
//1.数组排序 Array sort()
const arr=[1,245,6,23,8,'a'];
console.log(arr.sort());

const num=(a,b)=>a-b;
console.log(arr.sort(num));

//2.数组迭代 forEach()给每个元素执行一次定义的函数
// map()
const colors=["red","green","'blue"]
for(let i=0;i<colors.length;i++){
    console.log(`${i}=${colors[i]}`)
}

const color=["red","green","blue"]
color.forEach(
    (color,index)=>console.log(`${index}=${color}`)
);

const arr=[1,2,3,4]
arr.forEach(
    (arr)=>console.log(`${arr}`)
);


//map每个元素执行一次函数
const arr=[1,2,3,4];
const arr1=arr.map((x)=>x+2);
console.log(arr1);

//改写：定义一个函数，得一个新数组，里每个元素是旧数组的平方
const arr=[1,2,3];
let arr2=[];
for(let i=0;i<arr.length;i++){
    arr2[i]=arr[i]*arr[i]
}
console.log(arr2);

const arr=[1,2,3];
let arr2=arr.map((x)=>x*x);
console.log(arr2);

// reduce()//数组每个元素执行一次reduce函数，然后返回一个汇总的一个值
const arr=[1,2,3];
const arr2=arr.reduce(
    (sum,curVal)=>sum+curVal
)
console.log(arr2);

const arr2=[1,2,3,4].reduce((sum,a)=>sum+a,20)
console.log(arr2);
//统计字符数
const a="i love you 你";
const b=a.split("");
console.log(b);

const c=b.reduce((sum,val)=>sum+val.length,0);
console.log(c);
// filter()创建一个新数组，其包含函数测试过的所有元素
const arr=[1,2,3];
const a2=arr.filter((a)=>a%2===0);
console.log(a2);


const a="i love you";
const b=a.split(" ");
console.log(b);
const a2=b.filter((a)=>a.length>3);
console.log(a2);

const a=[1,2,3].map((x)=>x*x).reduce((acc,x)=>acc+x);
console.log(a);