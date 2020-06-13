import React, { Component } from 'react'
import {Card,
     Select,
     Input,
     Button,
     Icon,
     Table,
     



} from "antd"
import {reqProducts} from "../../API/comment"
import LinkButton from "../../component/LinkButton"
const { Option } = Select;
export default class Product extends Component {
    state={
        loading:false,
        products:[],   //商品
        total:0 //商品的总数量
    }
    initColumn=()=>{
        this.columns=[
            {title:"商品名称",
             dataIndex:"goods_name",
        },
        {title:"商品描述",
        dataIndex:"goods_number",
          },
          {title:"价格",
          dataIndex:"goods_price",
          render:(price)=>"￥"+price  //我我们的price需要修饰所以用render
          //不写dataIndex，render的参数就是总的数据,渲染标签必须有跟标签
         },
         {title:"状态",
         dataIndex:"goods_state",
         render:(status)=>{
             let btnText="下架"
             let text = "在售"
             if(status===2){
                 btnText="上架"
                 text="以下架"

             }
           return (
            <span>
            <button>{btnText}</button>
            <span>{text}</span>
           </span>
           )
        }
    },
    {title:"操作",
    render:(product)=>(
        <span>
            <LinkButton>详情</LinkButton>
            <LinkButton>修改</LinkButton>

        </span>
  )
      }
        ]
    }
    getProducts=async (page)=>{
    const result = await   reqProducts(page,2)
    if(result.data.meta.status===200){
      const {goods,total} = result.data.data
     
      this.setState({
          products: goods,
          total
      })
    }
 
    }
    componentWillMount(){
        this.initColumn()
    }
    componentDidMount(){
        //1表示获取第一页的显示
        this.getProducts(1)
    }
   
   

   
   
   
   
   
   
   
   
   
   
   
   
    render() {
        const {loading,products,total} =this.state
        
        const title=(
            <span>
                <Select style={{width:200}} value="2">
                    <Option value="1">
                        按名称搜索
                    </Option>
                    <Option value="2">
                         按描述搜索
                        </Option>
                </Select>
                <Input placeholder="请输入" style={{width:200,margin:"0  10px"}}/>
              <Button type="primary">搜索</Button>
            </span>
        )
        const extra=(
            <Button type="primary">
                <Icon type="plus">

                </Icon>
                添加商品
            </Button>
        )
        return (
            <div className="productBox">
              <Card title={title} extra={extra}>
              <Table 
                 bordered
                 columns={this.columns}
                 rowKey="goods_price"  //这个数据直接写就可以了不用去解构
                 dataSource={products}
                 pagination={{   //分页器的配置
                     defaultPageSize:2,
                     showQuickJumper:true,
                     total,
                     onChange:this.getProducts
                    
                 }}
                loading={this.state.loading}
             
                 />
    
              </Card>
            </div>
        )
    }
}
