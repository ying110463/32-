import {CART_CHECK, CART_ALL_CHECK, CART_NUM_UPDATE, CART_DELETE, CART_ADD} from '../actionTypes'

/**
 * 加入购物车
 * @param {obj} goodsinfo 
 */
export const cartAdd=(goodsinfo)=>{
return{
    type:CART_ADD,
    value:{goodsinfo}
}
}
/**
 * 改变商品的选中状态
 * @param {number} id 要操作的商品的id
 */
export const cartCheck = (id) => {
    return {
      type: CART_CHECK,
      value: { id }
    }
  }
  
  /**
   * 实现点击全选 改变商品的选中状态
   * @param {bool} isChecked 全选按钮的状态
   */
  export const cartAllCheck = (isChecked) => {
    return {
      type: CART_ALL_CHECK,
      value: { isChecked }
    }
  }
  
  /**
   * 修改购物车数量
   * @param {number} id 要操作的id
   * @param {number} unit 加多少减多少
   */
  export const cartNumUpdate = (id, unit) => {
    return {
      type: CART_NUM_UPDATE,
      value: { id, unit }
    }
  }
  
  
  /**
   * 删除购物车数据
   * @param {number} id 要删除的id
   */
  export const cartDelete = (id) => {
    return {
      type: CART_DELETE,
      value: { id }
    }
  }