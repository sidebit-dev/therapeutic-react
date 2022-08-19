import './SobreMim.css';
import Sobre from '../../assets/terapeuta.png';

const SobreMim = () => {
  return (
    <>
    <div className="w3-row w3-padding-64" id="about">
        <div className="w3-col m6 w3-padding-large w3-hide-small">
          <img
            src={Sobre}
            className="w3-round w3-image"
            alt="Table Setting"
            width="600"
            height="750"
          />
        </div>

        <div className="w3-col m6 w3-padding-large">
          <h1 className="w3-center w3-text-green">Sobre mim</h1>
          <br />
          <h5 className="w3-center">Experiência desde 2002</h5>
          <p className="w3-large">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod
            quam ut facilisis pellentesque proin quam placerat odio velit. Nam
            in neque dictum et ipsum quis eu ipsum elit. Nec amet elementum eget
            urna ornare leo use
            <span className="w3-tag w3-light-grey">skdsie</span> kkgfddjs.
          </p>
          <p className="w3-large w3-text-grey w3-hide-medium w3-hide-small">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod temporincididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <hr />
    </>
  )
}

export default SobreMim