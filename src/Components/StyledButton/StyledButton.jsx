import React from 'react'

const StyledButton = ({variant, lightMode}) => {
  return (
    <div className={`styledButton ${variant} ${lightMode ? 'light' : 'dark'}`}>
      <button>See more</button>
    </div>
  )
}

export default StyledButton
