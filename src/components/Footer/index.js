import './Footer.css'

const Footer = () => {

  const logoImg = '/imagens/logo.png'
  const fbImg = '/imagens/fb.png'
  const igImg = '/imagens/ig.png'
  const twImg = '/imagens/tw.png'

  return (
    <section>
      <div className='footer'>
        <div className='social'>
          <img src={fbImg} />
          <img src={twImg} />
          <img src={igImg} />
        </div>
        <div className='logo'>
          <img src={logoImg} />
        </div>
        <div className='by'>
          Desenvolvido por Alura.
        </div>
      </div>
    </section>
  )
}

export default Footer
