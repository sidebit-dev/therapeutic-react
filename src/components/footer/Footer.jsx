import './Footer.css'
import Copyright from '../../assets/copyright.png';

const Footer = () => {
  return (
    <>
        <footer className="w3-center w3-light-grey w3-padding-16">
      <p>
        2022 <img className="w3-green" src={Copyright} alt="copyright" width="14px" /> 
        <a href="#home" title=""  className="w3-hover-text-green"> sidebit.dev</a>
      </p>
    </footer>
    </>
  )
}

export default Footer