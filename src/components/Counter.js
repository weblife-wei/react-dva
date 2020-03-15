import React from 'react'
import {connect} from "dva"
import PropTypes from "prop-types"   //dva中自带了prop-types校验库
import {routerRedux} from "dva/router"

function Counter(props) {
  console.log('counter-props',props)  //{history,location,match,dispatch,counter}
  const {dispatch,counter}=props
  return (
    <div>
       {counter}
       <br/>
       <button onClick={()=>dispatch({type:'counter/add'})}>+</button>   {/* 发送action的时候必须将models的nameSpace名称带上*/}
       <button onClick={()=>dispatch({type:'counter/asyncAdd'})}>异步+</button>   

       <button onClick={()=>dispatch(routerRedux.push('/'))}>跳转回首页</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
  console.log(state)  //{routing: {location: null},@@dva: 0,example: {},counter:{count:0}}
  return {
    counter:state.counter.count
  }
}

Counter.propTypes={
  counter:PropTypes.number
}

export default connect(mapStateToProps)(Counter)