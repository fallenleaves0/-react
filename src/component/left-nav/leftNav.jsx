import React, { Component } from 'react'
import "../../static/scss/leftNav.scss"
import {Link,withRouter} from "react-router-dom"
import login from "../../static/img/logo.png"
import { Menu, Icon, Button } from 'antd';
import menuList from "../../config/menuConfig"
const { SubMenu } = Menu;

 class leftNav extends Component {
    getMenuList=(menuList)=>{
       
        //封装对二级导航的遍历
       
      
       return menuList.map(item=>{
           if(!item.children){
           return ( <Menu.Item key={item.key}>
           <Link to={item.key}>
           <Icon type={item.icon} />
           <span>{item.title}</span>
           </Link>
         </Menu.Item>)
            
           }
           const ci =item.children.find(citem=>citem.key===this.props.location.pathname)
             if(ci){
                 this.openkey = item.key
                 
             }
           
           return (  <SubMenu
           key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
         {/* 这个递归很牛逼 */}
         {this.getMenuList(item.children)}
          </SubMenu>)
       })
    }
    componentWillMount(){
        //为第一次render做一些同步的准备工作
        this.menuNode = this.getMenuList(menuList)
    }
    render() {
       
    const path = this.props.location.pathname
        return (
            <div className="leftNavBox">
            <Link to="/home" className="left-nav-link">
              <img src={login}/>
              <h1>天神后台</h1>
            </Link>
            <Menu
            
        



          selectedKeys={[path]}
          defaultOpenKeys={[this.openkey?this.openkey:null]}
          mode="inline"
          theme="dark"
        
        >
             {this.menuNode}
          {/* <Menu.Item key="/home">
            <Link to="/home">
            <Icon type="home" />
            <span>首页</span>
            </Link>
          </Menu.Item>
        
          <SubMenu
            key="products"
            title={
              <span>
                <Icon type="mail" />
                <span>商品</span>
              </span>
            }
          >
         
            <Menu.Item key="/category">
            <Link to="/category">
            <Icon type="folder-open" />
            <span>品类管理</span>
            </Link>
                 </Menu.Item>
            <Menu.Item key="/product">
            <Link to="/product">
            <Icon type="filter" />
            <span>商品管理</span>
            </Link>
            </Menu.Item>
          </SubMenu>
       
        */}
        </Menu>
            </div>
        )
    }
}
export default withRouter(leftNav)
