import React from 'react'
import "./Notification.css"

const Notification = ({type, message}) => {
  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  )
}

export default Notification
