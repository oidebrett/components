import React from 'react'
import FlowList from './FlowList'

const FlowMenu = () => {
  return (
    <div className="FlowMenu">
        <h3>Flow Menu</h3>
        <div>Control your flows.</div>
        <hr />
        <FlowList/>    
    </div>
  )
}

export default FlowMenu