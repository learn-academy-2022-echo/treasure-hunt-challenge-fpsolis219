import React, { useState } from 'react'

const Square = (props) => {
  const hanndleClick = () => {
  props.handleGamePlay(props.index)
}
  return(
      <>
      <div className="square" onClick={hanndleClick}>{props.value}</div>
      </>
    )
}
  
export default Square
