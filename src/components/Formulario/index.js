import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (event) => {
    event.preventDefault()
    props.aoColaboradorCadastrado({
      nome, cargo, imagem, time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
      <h2>Preencha os dados para criar o card do colaborador:</h2>        
        <TextField label="Nome" placeholder="Digite o seu nome" required={true} value={nome} aoAlterado={valor => setNome(valor)} />
        <TextField label="Cargo" placeholder="Digite o seu cargo" required={true} value={cargo} aoAlterado={valor => setCargo(valor)}  />
        <TextField label="Imagem" placeholder="Digite a url da imagem" value={imagem} aoAlterado={valor => setImagem(valor)} /> 
        <DropdownList label="Time" items={props.times} required={true} value={time} aoAlterado={valor => setTime(valor)} />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  )
}

export default Formulario
