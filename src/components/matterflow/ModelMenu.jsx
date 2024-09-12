import React from 'react'
import ModelAndInstanceList from './ModelAndInstanceList'

const ModelMenu = () => {
  return (
    <div className="FlowMenu">
        <h3>Model Menu</h3>
        <div>Define your models.</div>
        <hr />
        <ModelAndInstanceList/>    
    </div>
  )
}

export default ModelMenu