import "./UserPanel.scss"

import React from "react"
import { CloseButton } from "react-bootstrap"

interface PropsUserPanel {
  collapse: boolean
  onCloseUserPanel: Function
}

const UserPanel: React.FC<PropsUserPanel> = (props: PropsUserPanel) => {
  const clickBtnClose = () => {
    props.onCloseUserPanel(false)
  }

  let className = "container-user-panel "
  if (props.collapse) {
    className += "show"
  }

  return (
    <div className={className}>
      <div className="user-panel-header">
        <div className="container">
          <CloseButton variant="white" onClick={clickBtnClose} />
        </div>
      </div>
      <div className="user-panel-body">
        <div className="container">
          <div className="user-icon">
            <img src="/images/user.jpg" alt="user" />
          </div>
          <h3 className="user-title mt-2">Привет, Алексей!</h3>
          <ul className="container-menu">
            <li>Избранные места</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserPanel
