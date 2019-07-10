import React,{Fragment} from 'react'
import{getGoods,getGroup} from '../request/index'
import {Carousel} from 'antd-mobile'

class Home extends React.Component{
state={
    imgHeight: 176,
    sliderlist: [],
    toplist: [],
    goodsgrouplist:[]

}

componentDidMount(){
    getGoods()
    .then(res=>{
        
        this.setState({
            sliderlist:res.sliderlist,
            toplist:res.toplist
        })
    })
  
    // eslint-disable-next-line no-undef
    getGroup().then(res=>{
      console.log(res)
      this.setState({goodsgrouplist:res})
      
    })
  
}


    render(){
     
        return(
          <Fragment>
            <Carousel
          autoplay
          infinite
        >
          {this.state.sliderlist.map(val => (
            <div
              key={val.id}
              onClick={()=>this.props.history.push('/GoodsDetail/'+val.id)}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
             
              <img
                src={val.img_url}
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
        <div className="recommonent">
          <div className="recommonent_title">推荐商品</div>
          <div className="recommonent_content">
            {this.state.toplist.map(v =>
              <div className="rec_item" key={v.id}
               onClick={()=>this.props.history.push('/GoodsDetail/'+v.id)} >
                <div className="rec_item_img_wrap">
                  <img src={v.img_url} alt="" />
                </div>
                <div className="rec_item_goods_wrap">
                <div className="rec_item_title">
                {v.title}
                </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* 商品列表开始 */}
        <div className='group'>
          {this.state.goodsgrouplist.map(v=> 
          <div className='group_content' key={v.level1cateid}>
            <div className='goods_group_title'>{v.catetitle}</div>
            <ul className='goods_group_content'>
             {v.datas.map(v2=><li key={v2.artID}
             onClick={()=>this.props.history.push('/GoodsDetail/'+v2.artID)}
             >
               <img src={v2.img_url} alt='' />
               <div className='goods_name'>{v2.artTitle}</div>
               <div className='goods_price_row'>
                 <span className='sell_price'>￥{v2.sell_price}</span>
                 <span className='market_price'>￥{v2.market_price}</span>
               </div>
               <div className='goods_hot_sell'>热卖中<span>{v2.stock_quantity}件</span></div>
             </li>)}
            </ul>
          </div>
            
            )}
  
        </div>

      
<style jsx>{`
div.recommonent {
  div.recommonent_title {
    padding: 10px;
    color: #666;
    font-size: 14px;
  }

  div.recommonent_content {
    padding: 10px;
    background-color: #fff;
    div.rec_item {
      padding: 5px;
      display: flex;
      border-bottom: 1px solid #ccc;
      div.rec_item_img_wrap {
        flex: 1;
        img {
         
        }
      }

      div.rec_item_goods_wrap {
        flex: 6;
        overflow: hidden;
        font-size: 16px;
        font-weight: 600;
        .rec_item_title{
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-top: 15px;
       
          
        }
      }
    }
  }
}
div.group {
  div.group_content {
    div.goods_group_title {
      padding:10px 0;
      background-color: #ccc;
      font-size: 20px;
    }

    ul.goods_group_content {
      display: flex;
      flex-wrap: wrap;
      padding: 0 5px;
      
      li {
          width: 50%;
          background-color: #fff;
          padding: 5px;
          &:nth-child(odd){
            border-right: 1px solid #ccc;
          }
          border-bottom: 1px solid #ccc;
          img{
            width: 80%;
            margin:0 auto
          }
       

        div.goods_name {
          color: #000;
          font-size: 14px;

          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        div.goods_price_row {
          padding: 5px 0;
          display: flex;
          justify-content: space-between;
          
          span.sell_price {
            color: red;
            font-size: 15px
          }

          span.market_price {
            color: #666;
            text-decoration: line-through
          }
        }

        div.goods_hot_sell {
          padding: 6px 0;
          span {
            font-size: 15px;
            color: red;
          }
        }
      }
    }
  }
}


`}</style>
        </Fragment>
       )
    }
}




export default Home