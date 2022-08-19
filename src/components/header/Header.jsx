import './Header.css';
import Cidade from '../../assets/20220528_175742.jpg';

const Header = () => {
  return (
    <>
    <header className="w3-display-container w3-content w3-wide" id="home">
      <img
        className="w3-image"
        src={Cidade}
        alt="Foto de cidade"
        width="1600"
        height="800"
      />
      <div className="w3-display-bottomleft w3-padding-large w3-opacity">
        <h1 className="w3-xxlarge w3-text-white">Terapeuta da Silva</h1>
      </div>
    </header>
    </>
  )
}

export default Header