import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
  const backgColor = {backgroundColor:props.corSecundaria}
  const brdColor = {borderColor: props.corPrimaria}
  return (
    (props.colaboradores.length > 0 ) ? <section className='time' style={backgColor}>
      <h3 style={brdColor}>{props.nome}</h3>
      <div className='colaboradores'>
        { props.colaboradores.map( colaborador => <Colaborador 
                                                      key={colaborador.nome} 
                                                      nome={colaborador.nome} 
                                                      cargo={colaborador.cargo} 
                                                      imagem={colaborador.imagem} 
                                                      time={colaborador.time} 
                                                      corDeFundo={props.corPrimaria}
                                                  /> ) }
      </div>
    </section>
    : ''
  )

}

export default Time
