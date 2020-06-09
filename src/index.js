import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavTop from "./component/topBar"

import {ConfigProvider} from "antd"
import {Switch,HashRouter,Route,Redirect} from "react-router-dom"

import zhCN from 'antd/es/locale/zh_CN';
import "./static/css/reset.css"
import "./static/scss/comment.scss"




import {Provider} from "react-redux"

import store from "./store/index"



ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
          
              <div>
                <NavTop ></NavTop>
               
            

             
              </div>
           
        </HashRouter>
      </Provider>
 ,
  document.getElementById('root')
);

