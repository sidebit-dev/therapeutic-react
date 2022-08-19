import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Header from './components/header/Header';
import SobreMim from './components/sobre/SobreMim';

function App() {
  return (
    <>
    <NavBar />  
    <Header />  
    <div class="w3-content" styleName="max-width: 1100px">
      <SobreMim />
    </div>
    </>
  );
}

export default App;
