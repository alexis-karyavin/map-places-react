import './MapTools.scss';

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap';

const MapTools = () => {
  return (
    <div className="map-tools-container">
      <div className="map-tools-group user">
        <Button>
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