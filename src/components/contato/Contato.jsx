

const Contato = () => {
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
        <form action="/action_page.php" target="_blank">
          <p>
            <input
              className="w3-input w3-padding-16"
              type="text"
              placeholder="Nome"
              required
              name="Name"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16"
              type="email"
              placeholder="E-mail"
              required
              name="email"
            />
          </p>
          <p>
            <input
              className="w3-input w3-padding-16"
              type="text"
              placeholder="Mensagem \ Campo obrigatório.."
              required
              name="Message"
            />
          </p>
          <p>
            <button className="w3-button w3-green w3-section" type="submit">
              ENVIAR
            </button>
          </p>
        </form>
      </div>
    </>
  )
}

export default Contato