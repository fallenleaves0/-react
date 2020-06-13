import React, { Component } from 'react'
import PropTypes from "prop-types"
import {Form,Input} from "antd"
const Item = Form.Item
 class AddCategory extends Component {
     //不加static是给组件对象就是实例的，加是给函数对象就是类对象加的AddCategory。
     static propTypes={
         setForm:PropTypes.func.isRequired,
         categoryName:PropTypes.string   //这个值有可能没传
     }
     componentWillMount(){
         //将子组件的form对象交给父组件
         this.props.setForm(this.props.form)
     }
    render() {
        const {categoryName} = this.props
       
       const {getFieldDecorator} = this.props.form  //包装input 验证
        return (
           <Form>
               <Item>
                   {
                       getFieldDecorator("categoryName",{
                        initialValue:categoryName||"",
                          rules:[
                              {required:true,message:"分类名称必须输入"}
                          ]  
                       })(<Input type="text" placeholder="输入分类名称">
                   
                       </Input>)
                   }
               </Item>
           </Form>
        )
    }
}
export default Form.create()(AddCategory)
//initialValue 这个属性在我们添加或者修改之后会让所有的初识值变成我们输入的
//我们需要调用form对象的resetFields() 去重置输入数据，在添加和取消的时候都要reset