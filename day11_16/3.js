//事件三要素：事件源，事件类型，事件处理程序


const oButton1=document.querySelector("#myButton1")

//方法一:只能绑定一个，只能执行一个
const callback=function(){
console.log('click')
}
const callback2=function(){
    console.log('click2')
    }

oButton1.onclick=callback
oButton1.onclick=callback2
oButton1.onclick=null//取消绑定
//oButton1.addEventListener('click',callback)

//方法二：可以绑定n个都执行

oButton1.addEventListener('click',callback,true)
oButton1.addEventListener('click',callback2)
oButton1.removeEventListener('click',callback,true)
