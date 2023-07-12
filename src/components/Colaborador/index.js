import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Colaborador = ({nome, cargo, imagem, corDeFundo, id, aoDeletar, favorito, aoFavoritar}) => {
  const bgColor = corDeFundo
  return (
    <div className='colaborador'>
      <AiFillCloseCircle className="deletar" onClick={() => aoDeletar(id)} size={25} />
        <div className='cabecalho' style={{backgroundColor: bgColor}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
            <div className='favoritar'>
                {favorito ? 
                    <AiFillHeart size={25} onClick={() => aoFavoritar(id)} /> : 
                    <AiOutlineHeart size={25} onClick={() => aoFavoritar(id)} />
                }
            </div>
        </div>
    </div>
  )
}

export default Colaborador
