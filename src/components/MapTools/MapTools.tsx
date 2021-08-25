import './MapTools.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap';
// import { useState } from 'react';

const MapTools = (props: any) => {

  // const [showUserPanel, setShowUserPanel] = useState(false);

  const clickBtnUser = () => {
    // setShowUserPanel(!showUserPanel);
    props.onCollapseUserPanel(true);
  }

  return (
    <div className="map-tools-container">
      <div className="map-tools-group user">
        <Button onClick={clickBtnUser}>
          <FontAwesomeIcon icon={["fas", "user"]} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={["fas", "star"]} />
        </Button> 
      </div>
    </div>
  );
};

export default MapTools;