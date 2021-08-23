import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import MapContainer from './components/Map/MapContainer'
import MapTools from './components/MapTools/MapTools';

library.add(fas);

function App() {
  return (
    <>
      <MapTools />
      <MapContainer />
    </>
  );
}

export default App;
