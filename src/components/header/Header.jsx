import './Header.css';

const Header = () => {
  return (
    <>
    <div className="w3-top">
    <div
      className="w3-bar w3-white w3-card">
      <a href="#home" className="w3-bar-item w3-button"
        ><img src="../logo-vd.png" alt="Logo iTherapeutic" /></a>
       
      <div className="w3-display-topright nav-tel w3-margin-right w3-hide-medium w3-hide-small">
        <p><em>Ligue para agendar uma consulta: (13) 99999-8888</em></p>
      </div>

      <div className="w3-display-bottomright nav-text w3-hide-medium w3-hide-small w3-text-green w3-margin-bottom">
        <a href="#about" className="w3-bar-item w3-button">Sobre</a>
        <a href="#menu" className="w3-bar-item w3-button">Terapias</a>
        <a href="#schedule" className="w3-bar-item w3-button">Agendar</a>
        <a href="#contact" className="w3-bar-item w3-button">Contato</a>
      </div>
    </div>
  </div>
  </>
  )
}

export default Header