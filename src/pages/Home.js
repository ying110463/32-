import React,{Fragment} from 'react'
import{getGoods} from '../request/index'
import {Carousel} from 'antd-mobile'

class Home extends React.Component{
state={
    imgHeight: 176,
    sliderlist: [],
    toplist: []
}

componentDidMount(){
    getGoods()
    .then(res=>{
        console.log(res)
        this.setState({
            sliderlist:res.data.message.sliderlist,
            toplist:res.data.message.toplist
        })
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
            <a
              key={val.id}
              href="http://www.alipay.com"
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
            </a>
          ))}
        </Carousel>
        <div className="recommonent">
          <div className="recommonent_title">推荐商品</div>
          <div className="recommonent_content">
            {this.state.toplist.map(v =>
              <div className="rec_item" key={v.id} >
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
          </Fragment>
        )
    }
}
export default Home