import "./MapTools.scss"
import React from "react"
import ButtonIcon from "../base/ButtonIcon/ButtonIcon"
// import { useState } from 'react';

const MapTools: React.FC<{ onCollapseUserPanel: Function }> = ({
  onCollapseUserPanel,
}) => {
  // const [showUserPanel, setShowUserPanel] = useState(false);

  // const clickBtnUser = (e: any) => {
  //   // setShowUserPanel(!showUserPanel);
  //   e.preventDefault()
  //   onCollapseUserPanel(true)
  // }

  return (
    <div className="map-tools-container">
      <div className="map-tools-group user">
        {/* <button className="btn btn-transparent">
          <img src={require("../../assets/icons/user.png")} alt="user" />
        </button> */}
      </div>
      <div className="map-tools-group footer-menu">
        <div className="footer-menu-container">
          <ButtonIcon active={true} icon={["fas", "compass"]} />
          <ButtonIcon icon={["fas", "star"]} />
          <ButtonIcon icon={["fas", "wrench"]} />
        </div>
      </div>
    </div>
  )
}

export default MapTools
