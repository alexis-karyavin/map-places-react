import "./ButtonIcon.scss"

import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

interface PropsButtonIcon {
  active?: boolean
  icon: IconProp
}

const ButtonIcon = (props: PropsButtonIcon) => {
  let classButton = "btn btn-transparent btn-icon"
  if (props.active) {
    classButton = classButton + " active"
  }

  return (
    <div className="wrapper-button-icon">
      <button className={classButton}>
        <FontAwesomeIcon icon={props.icon} size="2x" />
      </button>
      {props.active && <div className="line-active"></div>}
    </div>
  )
}

ButtonIcon.defaultProps = {
  active: false,
}

export default ButtonIcon
