import React,{Fragment,Component} from 'react';
import {HashRouter as Router,Link,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Mine from './pages/Mine'
import GoodsDetail from './pages/GoodsDetail'

import MyLayout from './components/MyLayout'

class App extends Component{
  render(){
    return(
      <Fragment>
        {this.props.children}
        <Router>
          <Route path='/' exact render={(props)=><MyLayout {...props}><Home {...props}/></MyLayout>}></Route>
          <Route path='/Cart' exact render={(props)=><MyLayout {...props}><Cart/></MyLayout>}></Route>
          <Route path='/Mine' exact render={(props)=><MyLayout {...props}><Mine/></MyLayout>}></Route>
          <Route path='/GoodsDetail/:id' exact render={(props)=><GoodsDetail {...props}/>}></Route>
        </Router>
      </Fragment>
    )
  }
}

export default App;

