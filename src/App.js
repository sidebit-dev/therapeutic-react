import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Header from './components/header/Header';
import SobreMim from './components/sobre/SobreMim';
import Terapias from './components/terapias/Terapias';

function App() {
  return (
    <>
    <NavBar />  
    <Header />  
    <div class="w3-content" styleName="max-width: 1100px">
      <SobreMim />
      <Terapias />
    </div>
    </>
  );
}

export default App;
