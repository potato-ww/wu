//创建对象
let myObject = new Object();
myObject.name = 'bb';
myObject.age = 22;
console.log(myObject);

//创建对象字面量创建对象
const oStudent = {};
oStudent.name='ww';
oStudent.age=20;

const oStudent1 = {
    name:'ww',
    age:20
};
console.log(oStudent1.name);
console.log(typeof oStudent1);//object

//array
const a1 = new Array();

const a2 = [];
console.log(typeof a2);
console.log(a2[0]);//underfined
a2[0] = 'bb';
a2[1] = 'ww';
a2[5]='2';
console.log(a2);
console.log(a2[3]);


const a3=['bb','ww',2];
delete a3[1];//删除一个元素
console.log(a3);
console.log(a3.length);//数组长度，如果给长度赋值，超出长度以外的值就被忽略
a3.pop();//删除最后一个元素,把原来的数组破坏了
a3.push('a');//添加元素到末尾
a3.shift();//删除数组第一个元素
a3.unshift('qq');//在第一位添加一个元素


console.log(a2 instanceof Array);//判断a2是不是数组

const z=[1,2,3,4,5];
let a=z[0];
let b=z[1];
console.log(`a=${a},b=${b}`);
const [a,b,c,d] = [1,2,3,4];
const [a,b]=[1,2,3,4];
console.log(`a=${a},b=${b}`);

//合并数组
const a3=['bb','ww',2];
const z=[1,2,3,4,5];
const c=a3.concat(z);
const c1=[...a3,...z];
console.log(c,c1);
//join
const c2=z.join();
const c3=z.join('&');
console.log(c2,c3);
//slice取出指定元素
const c4=z.slice(1,3);
console.log(c4);
//splice删除元素再加入新元素(新元素可以是多个，也可是单个)
const z=[1,2,3,4,5];
z.splice(1,2,'www','wu');
console.log(z);


//排序
const num1=[1,2,34,56,15];
const num2=num1.sort();//按字母顺序排
console.log(num2);

const num3=['a','b','c',1];
 num3.reverse();
 console.log(num3);


 //查找
 const num1=[1,2,34,56,15,'ww'];
 const a=num1.indexOf('ww',3);//从第三个开始找ww的位置
 const b=num1.includes('ww');//判断数组里面有没有这个元素
 console.log(a,b);


 //多维数组
 const arr=[[1,2],[3,4]];
 console.log(arr);
 console.log(arr[1][0]);
//合并
 const num1=[1,2,34,56,15,'ww'];
 const num3=['a','b','c',1];
 const arr2=[num1,num3];//合并成二维数组
 const arr3=[...num1,...num3];//合并成一维数组
 console.log(arr2,arr3);


 //set集合
 const oSet = new Set();
 oSet.add(1);
 oSet.add(2);
 oSet.add(3).add(5);
 oSet.add(5);
 console.log(oSet);

const list1 = new Set([1,2,3,4,5]);
console.log(list1);
const list2 = new Set('hello');
console.log(list2);

const list3 = new Set().add('he').add('is').add('pig');
console.log(list3.size);//size集合元素个数,不能给size赋值，他只读
let a=list3.has('he');//判断是否含有该元素
list3.delete('he');//删除该元素
console.log(list3);
list3.clear();//清空集合
console.log(list3);

//数组与集合之间的转换
const list3 = new Set().add('he').add('is').add('pig');
const arr1=Array.from(list3);
console.log(arr1);

const arr2=[...list3]
console.log(arr2);


const num3=['a','b','c',1,1];
const set1=new Set(num3);//数组转集合
console.log(set1);
const arr=[...set1];//集合转数组
console.log(arr);


//weakset
let student={
    name:'bb',
    age:22
}
const str=new Set();
str.add(student);
student=null;
console.log([...str][0]);



let student={
    name:'bb',
    age:22
}
const weak =new WeakSet();
weak.add(student);
student=null;
console.log(weak.has(student));
//当student=null的时候，set里面依旧存在，在weakSet里面就不在了


//map
const oMap =new Map().set(4,"VI");
oMap.set(1,"I");
oMap.set(2,"II").set(3,"III");
console.log(oMap);
console.log(oMap.size);//值个数
const a=oMap.get(2);//取出2
console.log(a);
oMap.set('name','ww');//添加
const b=oMap.get('name');//取出
console.log(b);
console.log(oMap.has('name'));
const c=oMap.delete('name');//删除
oMap.clear();//清空
//转数组
const arr =[...oMap];//转数组

//var:所有的ES 版本都可用,ES6后建议用
//let：E6新增
// const：E6新增，安全







