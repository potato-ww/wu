const oList=document.querySelector('#list1')
//ul第二个元素子节点
const oli=oList.firstElementChild.nextElementSibling

// oli.style.cssText='border:1px red solid;'
oli.style.backgroundColor="red";
oli.style.border="1px blue solid";

const comStyle=window.getComputedStyle(oli)
console.log(comStyle.borderStyle)
console.log(comStyle.borderLeft)