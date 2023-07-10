import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Footer from './components/Footer'
import Time from './components/Time'
import { useState } from 'react'

function App() {

  const times = [
    {
      key: 'programming',
      name: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      key: 'frontend',
      name: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      key: 'datascience',
      name: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      key: 'devops',
      name: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      key: 'uxui',
      name: 'Ux e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      key: 'mobile',
      name: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      key: 'inovacaogestao',
      name: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])
  
  const aoNovoColaboradorCadastrado = (colaborador) => {
    // debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorCadastrado} times={times} />
      {times.map(time => <Time 
                            key={time.key} 
                            nome={time.name} 
                            corPrimaria={time.corPrimaria} 
                            corSecundaria={time.corSecundaria} 
                            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}
                          />
                  )
      }
      <Footer />      
    </div>
  );
}

export default App;
