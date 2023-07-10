import './Colaborador.css'

const Colaborador = ({nome, cargo, imagem, corDeFundo}) => {
  const bgColor = corDeFundo
  return (
    <div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: bgColor}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
  )
}

export default Colaborador
