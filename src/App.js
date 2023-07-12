import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Footer from './components/Footer'
import Time from './components/Time'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times,setTimes] = useState([
    {
      id: uuidv4(),
      key: uuidv4(),
      name: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      key: uuidv4(),
      name: 'Front-end',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      key: uuidv4(),
      name: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      key: uuidv4(),
      name: 'DevOps',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      key: uuidv4(),
      name: 'Ux e Design',
      cor: '#D86EBF'
    },
    {
      id: uuidv4(),
      key: uuidv4(),
      name: 'Mobile',
      cor: '#FEBA05'
    },
    {
      id: uuidv4(),
      key: uuidv4(),
      name: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ]);

  const inicial = []

  const [colaboradores, setColaboradores] = useState(inicial)
  
  const deletarColaborador = (id) => {
    console.log('deletando colaborador...', id)
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  const favoritarColaborador = (id) => {
    console.log('favoritando colaborador...', id)
    console.log('colaboradores:', colaboradores)
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time
    }))
  }

  const aoNovoColaboradorCadastrado = (colaborador) => {
    // debugger
    setColaboradores([...colaboradores, {...colaborador, id: uuidv4(), favorito:false}])
  }

  const aoNovoTimeCadastrado = (time) => {
    // debugger
    let novoTime = {}
    novoTime.id = uuidv4()
    novoTime.key = time.nomeTime
    novoTime.name = time.nomeTime
    novoTime.cor = time.corTime
    setTimes([...times, novoTime])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorCadastrado} aoTimeCadastrado={aoNovoTimeCadastrado} times={times} />
      {times.map(time => <Time 
                            key={time.key} 
                            nome={time.name} 
                            cor={time.cor} 
                            id={time.id}
                            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}
                            aoDeletar={deletarColaborador}
                            mudarCor={mudarCorDoTime}
                            aoFavoritar={favoritarColaborador}
                          />
                  )
      }
      <Footer />      
    </div>
  );
}

export default App;
