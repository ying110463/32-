import axios from 'axios'



axios.defaults.baseURL='http://react.zbztb.cn/site'

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let {data}=response;
    if(data.status===0){
        return data.message
    }else{
        console.log('404')
        return response;
    }
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export const getGoods=()=>axios.get("/goods/gettopdata/goods");
export const getGroup=()=>axios.get("/goods/getgoodsgroup");
export const goodsinfo=(id)=>axios.get("/goods/getgoodsinfo/"+id);