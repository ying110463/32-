import axios from 'axios'

export const getGoods=()=>axios.get("http://react.zbztb.cn/site/goods/gettopdata/goods");