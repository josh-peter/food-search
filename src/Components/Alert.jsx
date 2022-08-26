import React from 'react'
import style from "./Alert.module.css"

const Alert = ({alert}) => {
  return (
    <div className = {style.alert}>
        <h4>{alert}</h4></div>
  )
}

export default Alert