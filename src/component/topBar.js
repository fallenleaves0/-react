import React, { Component } from 'react'

import {withRouter,NavLink} from "react-router-dom"

import {connect} from "react-redux"
import action from "../store/action"
 class topBar extends Component {
    constructor(){
        super()
       
    }
    componentDidMount(){
        this.props.getDaoHang()
       
    }
    xianshi=(ev)=>{
        let target = ev.target,
        tarTag = target.tagName
        if(tarTag==="LI"){
       
        
        }
    }
    render() {
        const {data} =this.props.daoHang
        return (
            <div className="outertopBox" style={{position:"fixed",right:0,left:0}}>
            <div className="topBarBox">
               <img src="https://user-assets.sxlcdn.com/images/485384/FoIeCMbD3yJyJmVXRXZNki5Qi5hX.png?imageMogr2/strip/auto-orient/thumbnail/300x300%3E/format/png"/>
               <span>物联网云服务</span>
               <ul>
                 
                       {data?data.map(item=>{
                           return     <li  key={item.id}> <NavLink to={item.path} >
                           <span>{item.firstNav} </span>
                           </NavLink>
                          {item.secondeNav? <ul className="twoHang" >
                             
                             {item.secondeNav?item.secondeNav.map(ite=>{
                                     return   <li key={ite.id}> <NavLink to={ite.path} >
                       <span>{ite.name} </span>
                                        </NavLink></li>
                                    }):null}
                                
                             </ul>:null}
                           </li>
                       }):null}
                      
                   
               </ul>
               <span>搜索</span>
              </div> 
            </div>
        )
    }

}
export default connect(state=>({...state.about}),action.about)(topBar)
