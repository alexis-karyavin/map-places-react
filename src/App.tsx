import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import MapContainer from './components/Map/MapContainer'
import MapTools from './components/MapTools/MapTools';


function App() {
  return (
    <>
      <MapTools />
      <MapContainer />
    </>
  );
}

export default App;
