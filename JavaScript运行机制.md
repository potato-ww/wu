# ***\*JavaScript运行机制\****

代码：

let a=20;

const b=30;

var c;

function multiply(e,f){

  var g=20;

  return e*f*g;

}

c=multiply(20,30);

console.log(c)

 

可整理成：

function multiply(e,f){

  var g=20;

  return e*f*g;

}

var c;

 

//只执行这三条

let a=20;

const b=30;

c=multiply(20,30);

 

 1、当代码运行时，JavaScript 引擎首先创建一个全局执行上下文来执行全局代码。

![image-20201028120926594](C:\Users\60952\AppData\Roaming\Typora\typora-user-images\image-20201028120926594.png)

2、执行阶段，变量赋值完成。

![image-20201028121007023](C:\Users\60952\AppData\Roaming\Typora\typora-user-images\image-20201028121007023.png)

3、当遇到调用函数 multiply(20, 30) 时，就创建一个新的函数执行上下文来执行该函数代码。

![image-20201028121038647](C:\Users\60952\AppData\Roaming\Typora\typora-user-images\image-20201028121038647.png)

4、该执行上下文进入执行阶段，也就是说，该函数内的变量赋值已经完成

![image-20201028121218156](C:\Users\60952\AppData\Roaming\Typora\typora-user-images\image-20201028121218156.png)

5、该函数执行完成后，返回值被存储在 c 中。程序结束

![image-20201028121245083](C:\Users\60952\AppData\Roaming\Typora\typora-user-images\image-20201028121245083.png)

