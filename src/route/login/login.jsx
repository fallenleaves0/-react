import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox ,message} from 'antd';
import {Redirect} from "react-router-dom"
import storageUtils from "../../utils/storageUtils"
//后引入自定义
import "../../static/scss/login.scss"
import logo from "../../static/img/logo.png"
import {LoginP} from "../../API/comment"

 class login extends Component {
  
    //对表单所有字段统一验证
    handleSubmit = e => {
        //也可以用getFieldValue("username"),获得单个的值
        //也可以用getFieldsValue()获得所有的存在一个对象中。
        e.preventDefault();
        this.props.form.validateFields( async  (err, values) => {
          if (!err) {
           
         const {data:res} = await LoginP(values.username,values.password)
         console.log(res)
         if(res.meta.status!==200) return message.error("用户名或者密码错误")
         sessionStorage.setItem("token",res.data.token)
          storageUtils.saveUser(res.data)
            this.props.history.replace("/")
            message.success(`欢迎${values.username}`)
          }
        });
      };
    render() {
        const use =  storageUtils.getUser()
        if(use){
         
          
         //   this.props.history.replace() 这个一般放在事件回调函数中比如点击
         return <Redirect to="/"/>
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="loginBox">
                <div className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>天神管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登录</h1>
                  
                    <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
              initialValue:"", //初始值
            rules: [{ required: true, message: '请输入用户名!' },
                          {min:4,message:'用户名不能少于四位'},
                          {max:12,message:'用户名不能大于十二'},
                          {pattern:/^[a-zA-Z0-9_]+$/,message:'用户名必须包含数字字母下划线'},
                        
                        ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
                initialValue:"",
            rules: [{ validator:this.validatorPwd }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
         
          <Button type="primary" htmlType="submit" className="login-form-button">
           登录
          </Button>
      
        </Form.Item>
      </Form>
                    </div>
                </div>
          
        )
    }
    validatorPwd=(rule,value,callback)=>{
          value = value.trim()
        if(!value){
            callback("请输入密码")
        }else if(value.length<4){
            callback("密码不能小于四位")

        }else if(value.length>12){
            callback("密码不能大于十二位")

        }else{
            callback()
        }
    }
}
const WrapperLogin = Form.create()(login)
export default  WrapperLogin   //<form(login)>
//我们需要包装包含Form组件，然后生成一个新的组件
//新组件会向From组件传递一个属性，属性名from，属性值对象
