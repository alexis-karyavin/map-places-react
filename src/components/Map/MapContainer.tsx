import React, { useEffect, useState } from 'react';
import Map from '../../models/map'
import Spinner from '../base/Spinner/Spinner';

import data from '../../data/data';

import './Map.scss'



const MapContainer = () => {
  const [ places ] = useState(data);
  const [ showSpinner, setShowSpinner ] = useState(true);

  useEffect(() => {
    const map = new Map();
    map.init().then(() => {
      setShowSpinner(false);
    });
    map.addPlaces(places);
  })

  return (
    <>
      <div id="map"></div>
      { showSpinner && <Spinner />}
      {/* <Spinner /> */}
    </>
  );
};

export default MapContainer;