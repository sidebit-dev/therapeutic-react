import { useState } from "react";
import "./Contato.css";

const Contato = () => {
  //Gerenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(name, email, message);
  // Validação
  // envio
  // Reset do formulário
  setName('');
  setEmail('');
  setMessage('');
}



  return (
    <>
      <div className="w3-container w3-padding-64" id="contact">
        <h1 className="w3-text-green">Contato</h1>
        <br />
        <p>
          We offer full-service catering for any event, large or small. We
          understand your needs and we will cater the food to satisfy the
          biggerst criteria of them all, both look and taste. Do not hesitate to
          contact us.
        </p>
        <p className="w3-text-black w3-large">
          <b>Mundo Terapêutico, Av. Paulista, 43043 São Paulo, SP</b>
        </p>
        <p>
          Você pode contatar pelo whatsapp 1199999-3333 ou e-mail
          terapeuta@terapeuta.com, ou você pode enviar uma mensagem aqui:
        </p>
        <form onSubmit={handleSubmit}>
          <label className="w3-margin-top">
            <span>Nome:</span>
            <input
              className="w3-input w3-padding-16"
              type="text"
              placeholder="Digite seu Nome"
              required
              name="Name" 
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label className="w3-margin-top">
            <span>E-mail:</span>
            <input
              className="w3-input w3-padding-16"
              type="email"
              placeholder="Digite seu E-mail"
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label className="w3-margin-top">
            <span>Digite sua mensagem:</span>
            <textarea
              className="w3-input w3-padding-16"
              placeholder="Mensagem \ Campo obrigatório.."
              required
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </label>        
            <button className="w3-button w3-green w3-section w3-margin-top" type="submit">
              ENVIAR
            </button>     
        </form>
      </div>
    </>
  );
};

export default Contato;
