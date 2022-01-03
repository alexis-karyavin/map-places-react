import "./MapTools.scss"
import React from "react"
import ButtonIcon from "../base/ButtonIcon/ButtonIcon"

interface PropMapTools {
  onCollapseUserPanel: Function
}

const MapTools: React.FC<PropMapTools> = ({ onCollapseUserPanel }) => {
  // const [showUserPanel, setShowUserPanel] = useState(false);

  const clickBtnUser = (): void => {
    onCollapseUserPanel(true)
  }

  return (
    <div className="map-tools-container">
      <div className="map-tools-group user">
        <button
          className="btn btn-transparent btn-user"
          onClick={() => clickBtnUser()}
        >
          <img src="/images/user.jpg" alt="user" />
        </button>
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
