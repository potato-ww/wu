const oList=document.querySelector("#list1");
const oliElement=document.createElement("li");//创建li

//旧方法
// const oTextNode=document.createTextNode("www");//创建文本
// oliElement.appendChild(oTextNode)
// oList.appendChild(oliElement)

//新方法
oliElement.textContent='www';
// oList.append(oliElement)//插入最后一行
// oList.prepend(oliElement)//插入第一列
// oList.firstElementChild.after(oliElement)//第二行
//oList.lastElementChild.before(oliElement)//倒数第二行

//删除节点
//oList.lastElementChild.remove(oliElement);

//替换倒数第二个节点
//oList.lastElementChild.previousElementSibling.replaceWith(oliElement);



oList.lastElementChild.classList.add("list1")
oList.lastElementChild.previousElementSibling.classList.add("list")
oList.firstElementChild.classList.add("list1")
oList.addEventListener('mouseover',(envent)=>{
    envent.target.classList.toggle('list')
})

