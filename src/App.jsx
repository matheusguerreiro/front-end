// sass
import './App.sass';

// components
import Header from './components/header/Header';
import Map from './components/pages/Map';

// context
import { MarkerContextProvider } from './context/MarkerContext';
import { ModalContextProvider } from './context/ModalContext';


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
