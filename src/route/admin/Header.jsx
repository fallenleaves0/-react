import React, { Component } from 'react'
import storageUtils from "../../utils/storageUtils"
import { Modal } from 'antd';
import menuList from "../../config/menuConfig"
import {withRouter} from "react-router-dom"
import LinkButton from '../../component/LinkButton';
const { confirm } = Modal;
 class Header extends Component {
    constructor(){
        super()
        this.state={
            user: storageUtils.getUser().username,
           currentTime : Date.now()
        }
    }
    logout=(e)=>{
        //先显示确认提示,react不能用Javascript阻止默认事件
        e.preventDefault()
        confirm({
            title: '确认退出码',
            content: 'Some descriptions',
            onOk:()=>{
               //清除数据
               storageUtils.removeUser()
               //跳转到登录页面
               //这里有一个问题，直接写，this不是当前组件对象,
               //它原本不是箭头函数，所以我们要改成箭头函数
               this.props.history.replace("/login")
            },
            onCancel() {
              console.log('Cancel');
            },
          });
           
        
    }
    //通过比较url找出title然后返回，一旦点击，路由改变，重新渲染
    getTitle=()=>{
        let title = ""
        const path = this.props.location.pathname
        menuList.forEach(item=>{
            if(item.key===path){
             title = item.title
            }else if(item.children){
            const citem =    item.children.find(citem=>citem.key===path)
              if(citem){
                  title = citem.title
              }
            }
        })
            return title
        
    }
    componentDidMount(){
   this.intervalId =  setInterval(() => {
            //更新时间
            this.setState({
                currentTime:Date.now()
            })
        }, 1000);
    }
    componentWillMount(){
        clearInterval(this.intervalId)
    }
    render() {
        const title = this.getTitle()
        return (
            <div className="headerBox">
              <div className="header-top">
              欢迎{this.state.user}  &nbsp;
              
              <LinkButton onClick={this.logout}>退出</LinkButton>
              </div>
              <div className="header-bottom">
                <div className='header-bottom-left'>{title}</div>
                <div className='header-bottom-right'>
        <span>{this.state.currentTime}</span>
                    <img src=""/>
                     <span>晴天</span>
                </div>

             </div>
            </div>
        )
    }
}
export default withRouter(Header)
