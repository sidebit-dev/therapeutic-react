import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Header from './components/header/Header';
import SobreMim from './components/sobre/SobreMim';
import Terapias from './components/terapias/Terapias';
import Agendar from './components/agendar/Agendar';

function App() {
  return (
    <>
    <NavBar />  
    <Header />  
    <div class="w3-content" styleName="max-width: 1100px">
      <SobreMim />
      <Terapias />
      <Agendar />
    </div>
    </>
  );
}

export default App;
