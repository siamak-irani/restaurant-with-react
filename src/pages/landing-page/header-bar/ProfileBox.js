import React from 'react'

import classes from "./ProfileBox.module.css"
import {ReactComponent as AccountCircle} from "../../../files/icons/account_circle.svg"

const ProfileBox = () => {
  return (
    <div className={classes["profile-box"]}>
      <AccountCircle />
    </div>
  )
}

export default ProfileBox
