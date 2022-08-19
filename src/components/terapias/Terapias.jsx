import './Terapias.css';
import TerapiaFloral from '../../assets/terapia-floral.jpg';

const Terapias = () => {
  return (
    <>
    <div className="w3-row w3-padding-64" id="menu">
        <div className="w3-col l6 w3-padding-large">
          <h1 className="w3-center w3-text-green">Minhas Terapias</h1>
          <br />
          <h4>Terapia 1</h4>
          <p className="w3-text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <br />

          <h4>Terapia 2</h4>
          <p className="w3-text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <br />

          <h4>Terapia 4</h4>
          <p className="w3-text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <br />

          <h4>Terapia 5</h4>
          <p className="w3-text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <br />
        </div>

        <div className="w3-col l6 w3-padding-large">
          <img
            src={TerapiaFloral}
            className="w3-round w3-image w3-opacity-min"
            alt="Menu"
            width= "100%"
          />
        </div>
      </div>
      <hr />
    </>
  )
}

export default Terapias