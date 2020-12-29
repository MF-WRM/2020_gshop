/*
间接更新state的多个方法的对象
通过mutation
 */

// 引入所有的mutation-types
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'

export default {
  // 异步获取地址,参数为对象
  async getAddress ({commit,state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result =await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  // 异步获取食品分类数组,参数为对象
  async getCategorys ({commit}) {
    const result =await reqFoodCategorys()
    // 提交一个mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  // 异步获取商家数组,参数为对象
  async getShops ({commit,state}) {
    const {longitude,latitude} = state
    const result =await reqShops(longitude,latitude)
    // 提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  }
}
