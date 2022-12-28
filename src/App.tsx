import './App.scss';
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import PhotoDisplay from './components/PhotoDisplay/PhotoDisplay';
import Popup from './components/Popup/Popup';

function App() {
  return (
    <div className="app">
      <Header />
      <Popup />
      <div className="app__content">
        <PhotoDisplay />
        <Description />
      </div>
    </div>
  )
}

export default App;
