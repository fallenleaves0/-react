import React, { Component } from 'react'
import {Redirect,Route,Switch} from "react-router-dom"

import storageUtils from "../../utils/storageUtils"

import { Layout } from 'antd';


//const不能写在import上面
import "../../static/scss/home.scss"
import LeftNav from "../../component/left-nav/leftNav"
import Header from "./Header"
import InnerHome from './InnerHome';
import Category from './Category';
import Product from './Product';
import Role from './Role';
import User from './User';
import Bar from '../echars/Bar';
import Line from '../echars/Line';
import Pie from '../echars/Pie';
const { Footer, Sider, Content } = Layout;
export default class admin extends Component {

   
    render() {
        //这里一般我就是存返回的所有信息然后判断其中的比如id是否存在
    const user =  storageUtils.getUser()
    if(!user){
     //   this.props.history.replace() 这个一般放在事件回调函数中比如点击
    
     return <Redirect to="/login"/>
    }
   

        return (
            <Layout style={{height:"100%"}} className="homeBox">
            <Sider><LeftNav></LeftNav></Sider>
            <Layout>
            <Header/>
              <Content style={{backgroundColor:"yellow"}}>
           <Switch>
               <Route path="/home" component={InnerHome}/>
               <Route path="/category" component={Category}/>
               <Route path="/product" component={Product}/>
               <Route path="/role" component={Role}/>
               <Route path="/user" component={User}/>
               <Route path="/charts/bar" component={Bar}/>
               <Route path="/charts/line" component={Line}/>
               <Route path="/charts/pie" component={Pie}/>

              <Redirect to="/home"/>

           </Switch>


              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        )
    }
}
