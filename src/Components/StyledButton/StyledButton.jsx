import React from 'react'

const StyledButton = ({message, variant, lightMode}) => {
  return (
    <div className={`styledButton ${variant} ${lightMode ? 'light' : 'dark'}`}>
      <button>{message}</button>
    </div>
  )
}

export default StyledButton
