import React, { Component } from 'react'
import {Card,Button,Icon,Table, message,Modal} from "antd"
import LinkButton from '../../component/LinkButton';
import {getList} from "../../API/comment"
import {reqAddCategory,reqUpdataCategory} from "../../API/comment"

import ChangeCategory from "../../component/ChangeCategory"

  
 
export default class Category extends Component {
    constructor(){
        super()
        this.state={
            category:[],
            loading:false,
            showStatus:0   //0代表不显示，1代表显示添加，2代表显示修改
        }
    }
    initColumns=()=>{
        this.columns = [
            {
              title: '分类名称',
              dataIndex: 'cat_name',
           //   render: text => <a>{text}</a>,//把内容渲染为链接
            },
            {
              title: '操作',
              width:200,
              className: 'column-money',
             // dataIndex: 'money',
             //1.这个category可以显示当前这个对象所有的数据
             render: (category) => <LinkButton onClick={()=>{
                 //保存当前分类的所有数据
                 this.category = category
                 this.setState({showStatus:2})
                 
             }}>修改分类</LinkButton>
            }
          
          ];
    }
   getCategorys=  async()=>{
       this.setState({loading:true})
      const result = await  getList()
      this.setState({loading:false})

      if(result.status==200){
          //更新数据
          this.setState({
            category:result.data
          })

      }else{
          message.error("获取失败")
      }
    }
   handleOk= ()=>{
       //先表单验证
     this.form.validateFields( async  (err, values) => {
        if (!err) {
           
             //验证通过后，得到输入数据
           const {categoryName}  = values

            const {showStatus} = this.setState
       //发送添加或者修改请求
       if(showStatus===1){
        const result = await   reqAddCategory(categoryName)
        if(result.status==200){
            //重新发请求可以看到别人同一时间添加的
         
              this.getCategorys()
              message.success("添加成功")
        }else{
            message.error("添加失败")
        }
       }else{ //这是修改
        const cat_id =this.category.cat_id
      
        const resultTwo = await reqUpdataCategory(cat_id,categoryName)
        if(resultTwo.status==200){
            //重新发请求可以看到别人同一时间添加的
         
              this.getCategorys()
              message.success("修改成功")
        }else{
            message.error("修改失败")
        }
       }
      
         
            this.setState({
            showStatus:0
        })
     //2.重置初始值，防止我们在修改一次之后，之后的输入框
            //默认显示的都是我们第一次修改的
            this.form.resetFields()

        }
      });

      
       
    //根据结果做不同的处理
   }
   handleCancel=()=>{
    this.form.resetFields()
       //取消添加或者修改
       this.setState({
           showStatus:0
       })
   }
   
   
   
   
   
    componentWillMount(){
    //这个配置放在挂载前，不用每次渲染都用,代码我们放在自定义的方法中
        this.initColumns()
    }
    componentDidMount(){
        //我们把数据获取方法也定义外面
        this.getCategorys()
    }
    render() {
        const {showStatus} = this.state
        const category = this.category||{}
    
        // extra={<a href="#">More</a>}  card 右上角的结构
        return (
            <div className="categoryBox">
                <Card  extra={<Button type="primary" onClick={()=>{
                    this.setState({
                        showStatus:1
                    })
                }}><Icon type="plus"></Icon>添加</Button>} >
                <Table 
                 bordered
                 columns={this.columns}
                 rowKey="cat_id"  //这个数据直接写就可以了不用去解构
                 dataSource={this.state.category.data}
                 pagination={{
                     defaultPageSize:6,
                     showQuickJumper:true,
                    
                 }}
                loading={this.state.loading}
             
                 />

        <Modal
          title={showStatus==1?"添加分类":"修改分类"}
          //显示影藏的
          visible={showStatus!==0}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
                            
              <ChangeCategory
               setForm={form=>this.form=form} //把form传过来
               
               
               categoryName={category.cat_name}></ChangeCategory>
        </Modal>
               </Card>
               </div>
        )
    }
}
//通过函数传值的方法把子组件传的form对象传给父组件的实例上