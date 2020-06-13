import React from "react"

export default function LinkButton(props){
    return <button {...props} style={{border:"none",backgroundColor:"transparent",cursor:"pointer",height:"39px",color:"green"}}></button>
}
// 组件的标签体作为标签的children属性传入，比如<LinkButton>退出</LinkButton>
//那么children对应的属性值就是退出这个问题，还可能是标签对象，标签对象的数组，或者空。
//利用扩展运算符把所有的属性传给button