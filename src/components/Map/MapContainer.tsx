import React, { useEffect } from 'react';
import Map from '../../models/map'

import './Map.scss'

const MapContainer = () => {
  useEffect(() => {
    new Map();
  })

  return (
    <div id="map"></div>
  );
};

export default MapContainer;