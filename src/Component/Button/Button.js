import React from 'react'
import './Button.scss'

function Button({ onclick, className, children}) {
  return (
      <button className= {`btn ${className}`}  >{children}
          
    </button>
  )
}

export default Button