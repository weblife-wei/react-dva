import React from 'react'
import Counter from "./../components/Counter"

export default function CounterPage(props) {
  return (
    <div>
      <h3>CounterPage--route路由组件</h3>
      <Counter {...props }/>
    </div>
  )
}
