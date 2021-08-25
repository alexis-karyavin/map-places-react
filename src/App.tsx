import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import MapContainer from './components/Map/MapContainer'
import MapTools from './components/MapTools/MapTools';
import UserPanel from './components/UserPanel/UserPanel'
import { useState } from 'react';

library.add(fas);

function App() {

  const [showUserPanel, setShowUserPanel] = useState(false);

  const collapseUserPanel = (val: boolean) => {
    console.log('collapse', val);
    setShowUserPanel(val);
  }

  return (
    <>
      <MapTools onCollapseUserPanel={collapseUserPanel}/>
      {showUserPanel && <UserPanel onCloseUserPanel={collapseUserPanel}/>}
      <MapContainer />
    </>
  );
}

export default App;
