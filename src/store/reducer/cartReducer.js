import {
    CART_CHECK,
    CART_ALL_CHECK,
    CART_NUM_UPDATE,
    CART_DELETE,
    CART_ADD
} from '../actionTypes/index'

const defaultState = {
    cartList: [
        //     {
        //     id: 0,
        //     price: 1,
        //     num: 1,
        //     isChecked: true,
        //     title: "小米暖手器",
        //     img_url: "http://react.zbztb.cn/upload/201504/20/thumb_201504200119256512.jpg"
        // }
    ]
}
export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CART_CHECK: {
            let {
                id
            } = action.value;
            // 2 或要操作的购物车对象的索引
            let index = newState.cartList.findIndex(v => v.id === id);
            // 3 修改购物车对象的选中状态 取反 
            newState.cartList[index].isChecked = !newState.cartList[index].isChecked;
            return newState;
        }
        case CART_ALL_CHECK: {
            newState.cartList.forEach(v => v.isChecked = action.value.isChecked);
            return newState;
        }
        case CART_NUM_UPDATE: {
            let {
                id,
                unit
            } = action.value;
            let index = newState.cartList.findIndex(v => v.id === id);

            newState.cartList[index].num += unit;
            return newState;
        }
        case CART_DELETE: {
            let {
                id
            } = action.value;
            let index = newState.cartList.findIndex(v => v.id === id);
            newState.cartList.splice(index, 1);
            return newState;
        }
        case CART_ADD: {
            let {
                goodsinfo
            } = action.value;
            let {
                id
            } = goodsinfo;
            let index = newState.cartList.findIndex(v => v.id === id);
            if (index === -1) {
                newState.cartList.push({
                    id: goodsinfo.id,
                    price: goodsinfo.sell_price,
                    num: 1,
                    isChecked: true,
                    title: goodsinfo.title,
                    img_url: goodsinfo.img_url
                })
            } else {
                newState.cartList[index].num++
            }
            return newState
        }
        default:
            break
    }
    return state
}