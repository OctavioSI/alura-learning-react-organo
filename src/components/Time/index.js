import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
  const backgColor = {backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(props.cor, 0.6)}
  const brdColor = {borderColor: props.cor}
  return (
    (props.colaboradores.length > 0 ) ? <section className='time' style={backgColor}>
      <input value={props.cor} type='color' className='input-cor' onChange={event => props.mudarCor(event.target.value, props.id)} />
      <h3 style={brdColor}>{props.nome}</h3>
      <div className='colaboradores'>
        { props.colaboradores.map( colaborador => <Colaborador 
                                                    key={colaborador.nome} 
                                                    id={colaborador.id}
                                                    nome={colaborador.nome} 
                                                    cargo={colaborador.cargo} 
                                                    imagem={colaborador.imagem} 
                                                    time={colaborador.time} 
                                                    favorito={colaborador.favorito} 
                                                    corDeFundo={props.cor}
                                                    aoDeletar={props.aoDeletar}
                                                    aoFavoritar={props.aoFavoritar}
                                                    />
        ) }
      </div>
    </section>
    : ''
  )

}

export default Time
