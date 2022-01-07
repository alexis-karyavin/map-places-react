import "./UserPanel.scss"

import React from "react"
import { CloseButton } from "react-bootstrap"

interface PropsUserPanel {
  collapse: boolean
  onCloseUserPanel: Function
}

interface MenuItem {
  title: string
}

const UserPanel: React.FC<PropsUserPanel> = (props: PropsUserPanel) => {
  const clickBtnClose = () => {
    props.onCloseUserPanel(false)
  }

  let className = "container-user-panel "
  if (props.collapse) {
    className += "show"
  }

  const menu: Array<MenuItem> = [
    {
      title: "Избранные места",
    },
    {
      title: "Избранные места",
    },
    {
      title: "Избранные места",
    },
  ]

  const getListMenu = (menu: Array<MenuItem>) =>
    menu.map((item, i) => (
      <li className="menu-item" key={Date.now() + i}>
        {item.title}
      </li>
    ))

  const itemMenu = getListMenu(menu)

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
        </div>
        <ul className="container-menu">{itemMenu}</ul>
      </div>
    </div>
  )
}

export default UserPanel
