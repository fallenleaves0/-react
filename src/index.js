import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavTop from "./component/topBar"

import {ConfigProvider} from "antd"
import {Switch,HashRouter,Route,Redirect} from "react-router-dom"


import "./static/css/reset.css"
import "./static/scss/comment.scss"
import {Provider} from "react-redux"

import store from "./store/index"


import Login from "./route/login/login"
import Admin from "./route/admin/admin"

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
          
              <div style={{height:"100%"}}>
             <Switch>
               <Route path='/login' component={Login}/>
               <Route path='/admin' component={Admin}/>

             </Switch>
               
            

             
              </div>
           
        </HashRouter>
      </Provider>
 ,
  document.getElementById('root')
);

