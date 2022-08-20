import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Header from './components/header/Header';
import SobreMim from './components/sobre/SobreMim';
import Terapias from './components/terapias/Terapias';
import Agendar from './components/agendar/Agendar';
import Contato from './components/contato/Contato';
import Footer from './components/footer/Footer';

function App() {
  return (
 <>
    <NavBar />  
    <Header />  
    <div className="w3-content" style={{maxWidth:980}}>
      <SobreMim />
      <Terapias />
      <Agendar />
      <Contato />
    </div>
    <Footer />
    </>
  );
}

export default App;
