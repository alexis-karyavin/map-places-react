import React, { useEffect, useState } from 'react';
import Map from '../../models/map'

import data from '../../data/data';

import './Map.scss'

const MapContainer = () => {
  const [ places  ] = useState(data);
  useEffect(() => {
    const map = new Map();
    map.init();
    map.addPlaces(places);
  })

  return (
    <div id="map"></div>
  );
};

export default MapContainer;