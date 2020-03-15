
import {delay} from "dva/saga"  //delay用于异步模拟
export default {

  namespace: 'counter',

  state: {
    count:0
  },

  reducers: {
    'add'(state,actions){
       return {count:state.count+1}
    }
  },

  effects:{   //effects用于处理异步操作
    *asyncAdd({ payload }, { call, put,select }) {
      // const counter = yield select(state=>state.counter)   //方法一
      const counter=yield select(({counter})=>counter)  //方法二
      yield console.log(counter)  //0 获取的是执行异步之前的值
      yield call(delay,2000)  //延迟2秒
      yield put({ type: 'add' });  //转发actions，相当于发送dispatch（{type：add}）
    },
  }

};
