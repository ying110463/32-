import React,{Fragment} from 'react'
import {goodsinfo} from '../request/index'
import { NavBar, Icon,Carousel, Toast } from 'antd-mobile';
import { connect } from "react-redux";
import { cartAdd } from "../store/actiomCreator";


class GoodsDetail extends React.Component{
    state={
        imgHeight:176,
        goodsinfo:{},
        imglist:[]
    }

componentDidMount(){
   
    const {id}=this.props.match.params
    goodsinfo(id)
    .then(res=>{
        // console.log(res)
        this.setState({
            imglist:res.imglist,goodsinfo:res.goodsinfo
        })
    })
}


    render(){
       const {goodsinfo}=this.state
        return(  
         <Fragment>
              <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() =>this.props.history.go(-1)}
            >商品详情</NavBar>
             <Carousel
          autoplay
          infinite
        >
          {this.state.imglist.map(val => (
            <div
              key={val.id}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.original_path}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </div>
          ))}
        </Carousel>
      
        <div className='goods_info'>
           <div className='goods_title'>{goodsinfo.title}</div>
           <div className='goods_sub_title'>{goodsinfo.sub_title}</div>
           <div className='goods_price'>
              <span className='before_price'>{goodsinfo.market_price}</span> 
              <span className='news_price'>{goodsinfo.sell_price}</span> 
            </div> 

            <div className='goods_parameter'>
              <div className='goods_parameter_title'> 商品参数</div>  
              <div className='goods_no'>商品编号:{goodsinfo.goods_no}</div>  
              <div className='goods_stock_quantity'>库存:{goodsinfo.stock_quantity}</div>  
              <div className='goods_time'>上架时间:{goodsinfo.add_time}</div>  
              <div className='goods_content'dangerouslySetInnerHTML={{__html:goodsinfo.content}} />

            </div>   
        </div>

        <div className='footer_bar'>
              <div className='bar_item contacter'>
                  <span className='iconfont icon-kefu'></span>
                  <div className='bar_name'>客服</div>
              </div>
              <div className='bar_item shopping_cart'>
                  <span className='iconfont icon-gouwuche'></span>
                  <div className='bar_name' onClick={()=>this.props.history.push('/Cart')}>购物车</div>
                  <span className="mark" hidden={this.props.countAll===0} > {this.props.countAll} </span>
              </div>
              <div className='bar_item btn_cart_add' onClick={()=>this.props.handleCartAdd(goodsinfo)}>加入购物车</div>
              <div className='bar_item btn_buy'>立即购买</div>
          </div>


        <style jsx>{`
        div.goods_info {
            background-color: #fff;
            padding-bottom: 50px;
            div.goods_title {
              font-weight: 600;
              font-size: 20px;
              padding: 6px
            }
          
            div.goods_sub_title {
              padding: 6px;
              font-size: 16px;
              color: #666;
            }
          
            div.goods_price {
              display: flex;
              padding: 6px;
              justify-content: space-between;
               
              span.before_price {
                color: #666;
                text-decoration: line-through
              }
          
              span.news_price {
                color:red;
                font-size: 20px
              }
            }
          
            div.goods_parameter {
              div.goods_parameter_title {
                font-weight: 600;
                font-size: 20px;
                padding: 5px
              }
          
              div.goods_no {
                padding: 5px
              }
          
              div.goods_stock_quantity {
                padding: 5px;
                span{
                  color:red;
                  font-size: 20px
                }
              }
          
              div.goods_time {
                padding: 5px;
                
              }
          
              div.goods_content {}
            }
          }

          .footer_bar {
            position: fixed;
            display: flex;
            background-color: #fff;
            bottom: 0;left: 0;
            width: 100%;
            height: 50px;
            border-top: 1px solid #666;
          
            .bar_item {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              color: #000;
              font-size: 16px;
              flex:1
          
            }
          
            .shopping_cart {
             position: relative;
             .mark{
               position: absolute;
               padding: 3px 3px;
               background-color: orangered;
               color: #fff;
               font-size: 16px;
               border-radius: 50%;
               top: 0;left: 50%;
             }
            }
          
            div.bar_item.btn_cart_add {
              background-color: #ff976a;
              color: #fff;
              font-size: 18px;
              flex:2;
            }
          
            div.bar_item.btn_buy {
              background-color: #ff4444;
              color: #fff;
              font-size: 18px;
              flex:2;
            }
          }
        `}</style>
         </Fragment>
        )
    }
}


const getTotalNums = (arr) => {
  let sum = 0;
  arr.forEach(v => {
    if (v.isChecked) {
      sum += v.num;
    }
  })
  return sum;
}

const mapStateToProps=(state)=>{
  console.log(state)
  const { cartList } = state.cartReducer;
  return {
    // 需要结算的数量
    countAll: getTotalNums(cartList)
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    handleCartAdd:(goodsinfo)=>{
    dispatch(cartAdd(goodsinfo))
    Toast.info('加入购物车成功',1)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(GoodsDetail)