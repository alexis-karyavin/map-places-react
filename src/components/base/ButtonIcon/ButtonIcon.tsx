import "./ButtonIcon.scss"

import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// TODO: Задать тип
const ButtonIcon = (props: any) => {
  let classButton = "btn btn-transparent btn-icon"
  if (props.active) {
    classButton = classButton + " active"
  }

  return (
    <div className="wrapper-button-icon">
      <button className={classButton}>
        <FontAwesomeIcon icon={props.icon} />
      </button>
      {props.active && <div className="line-active"></div>}
    </div>
  )
}

ButtonIcon.defaultProps = {
  active: false,
}

export default ButtonIcon
