import './Agendar.css';
import Location from '../../assets/location.png';
import Whatsap from '../../assets/whatsap.png';
import Email from '../../assets/email.png';
import Clock from '../../assets/clock.png';

const Agendar = () => {
  return (
    <>
    <div className="w3-container w3-padding-64" id="schedule">
        <h1 className="w3-text-green">Agendar</h1>
        <div className="w3-col l6 w3-padding-large">
          <h4>Alternativas:</h4>
          <ul className="w3-ul w3-card-3">
            <li className="w3-bar">
              <img src={Location} alt="Localização" className="w3-bar-item w3-circle " width="60px" />
              <div className="w3-bar-item">
                <span className="w3-large">Av. Paulista, 000 - Pinheiros - SP</span>
              </div>
            </li>
            <li className="w3-bar">
              <img src={Whatsap} alt="Whatsapp" className="w3-bar-item w3-circle"  width="60px" />
              <div className="w3-bar-item">
                <span className="w3-large">11- 99999 3333</span>
              </div>
            </li>
            <li className="w3-bar">
              <img src={Email} alt="Email para contato" className="w3-bar-item w3-circle" width="60px" />
              <div className="w3-bar-item">
                <span className="w3-large">terapeuta@gmail.com</span>
              </div>
            </li>
            <li className="w3-bar">
              <img src={Clock} alt="Horário de funcionamento" className="w3-bar-item w3-circle " width="60px" />
              <div className="w3-bar-item">
                <span className="w3-large">09 às 16h</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="w3-col l6 w3-padding-large">
          <h4>Localização:</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9302516774555!2d-46.646232685716505!3d-23.5709483846781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59bd92bce431%3A0xc37ded133806ef0b!2sAv.%20Paulista%2C%20100%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-000!5e0!3m2!1spt-BR!2sbr!4v1660606779645!5m2!1spt-BR!2sbr" width="400px" height="300px" border="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa do local"></iframe>
        </div>       
      </div>
      <hr />
    </>
  )
}

export default Agendar