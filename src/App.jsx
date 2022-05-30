// sass
import './App.sass';

// components
import Header from './components/header/Header';
import Map from './components/pages/Map';

// context
import { MarkerContextProvider } from './context/markerContext';
import { ModalContextProvider } from './context/modalContext';


function App() {
  return (
    <div className="App">
      <Header />
      <ModalContextProvider>
        <MarkerContextProvider>
          <Map />
        </MarkerContextProvider>
      </ModalContextProvider>
    </div>
  );
}

export default App;
