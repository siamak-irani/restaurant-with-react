import React from 'react'

import classes from "./Wrapper.module.css"

const Wrapper = ({className,children}) => {
  return (
    <div className={`${classes["container"]} ${classes[className]}`}>
      {children}
    </div>
  )
}

export default Wrapper
