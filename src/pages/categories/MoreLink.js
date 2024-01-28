import React from 'react'

import classes from "./MoreLink.module.css"
import { Link } from 'react-router-dom'

const MoreLink = (props) => {
  return (
    <Link to={`categories/${props.to}`} className={classes["more"]}>
        بیشتر
    </Link>
  )
}

export default MoreLink
