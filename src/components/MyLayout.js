import { TabBar } from 'antd-mobile';
import React from 'react'
import {connect} from 'react-redux'


class MyLayout extends React.Component {

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            icon={<div className='iconfont icon-home'/>}
            selectedIcon={<div className='iconfont icon-home'/>}
            title="Home"
            key="Home"
            badge={""}
            selected={this.props.match.url==='/'}
            onPress={() => {
                this.props.history.push('/')
            }}
          >
            {this.props.children}
          </TabBar.Item>

          <TabBar.Item  
            icon={<div className='iconfont icon-gouwuche'/>
            }
            selectedIcon={<div className='iconfont icon-gouwuche'/>
            }
            title="Cart"
            key="Cart"
            selected={this.props.match.url==='/Cart'}
            badge={this.props.countAll}
            onPress={() => {
                this.props.history.push('/Cart')
            }}>
             {this.props.children}
          </TabBar.Item>
          <TabBar.Item
         
          icon={<div className='iconfont icon-weibiaoti2fuzhi12'/>
          }
          selectedIcon={<div className='iconfont icon-weibiaoti2fuzhi12'/>
          }
          title="Mine"
          key="Mine"
          selected={this.props.match.url==='/Mine'}
         dot
          onPress={() => {
              this.props.history.push('/Mine')
          }}
          >
             {this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
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
const mapStateToProps = (state) => {
  const { cartList } = state.cartReducer;
  return {
    // 需要结算的数量
    countAll: getTotalNums(cartList)
  }
}


export default connect(mapStateToProps,null)(MyLayout) 