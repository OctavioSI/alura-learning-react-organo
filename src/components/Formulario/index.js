import Button from '../Button'
import DropdownList from '../DropdownList'
import Field from '../Field'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  const [nomeTime, setNomeTime] = useState('')
  const [corTime, setCorTime] = useState('#000000')

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

  const aoSalvarTime = (event) => {
    event.preventDefault()
    props.aoTimeCadastrado({
      nomeTime, corTime
    })
    setNomeTime('')
    setCorTime('')
  }

  return (
    <section className='formulario-container'>
      <form onSubmit={aoSalvar} className='formulario'>
      <h2>Preencha os dados para criar o card do colaborador:</h2>        
        <Field label="Nome" placeholder="Digite o seu nome" required={true} value={nome} aoAlterado={valor => setNome(valor)} />
        <Field label="Cargo" placeholder="Digite o seu cargo" required={true} value={cargo} aoAlterado={valor => setCargo(valor)}  />
        <Field label="Imagem" placeholder="Digite a url da imagem" value={imagem} aoAlterado={valor => setImagem(valor)} /> 
        <DropdownList label="Time" items={props.times} required={true} value={time} aoAlterado={valor => setTime(valor)} />
        <Button>
          Criar Card
        </Button>
      </form>
      <form onSubmit={aoSalvarTime} className='formulario'>
      <h2>Preencha os dados para criar um novo time:</h2>        
        <Field label="Nome do Time" placeholder="Digite o nome do time" required={true} value={nomeTime} aoAlterado={valor => setNomeTime(valor)} />
        <Field type="color" label="Cor" placeholder="Digite a cor do time" required={true} value={corTime} aoAlterado={valor => setCorTime(valor)}  />
        <Button>
          Criar um Novo Time
        </Button>
      </form>
    </section>
  )
}

export default Formulario
