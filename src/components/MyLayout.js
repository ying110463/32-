import { TabBar } from 'antd-mobile';
import React from 'react'


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
            badge={1}
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
          badge={1}
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

export default MyLayout