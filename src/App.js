
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor:'#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Front End',
      cor:'#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor:'#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor:'#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Desingn',
      cor:'#FAE9F5'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor:'#FFF5D9'
    },
    {
      id: uuidv4(),
      nome:'Inovação e Gestão',
      cor:'#FFEEDF'
    },
   
  ])
  const [colaboradores, setColaboradores] = useState([])

  function deletarColaborador(prop) {
    console.log('deletando colaborador: ', prop);
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }


  return (
    <div>
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])}
       />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) =>
          <Time mudarCor={mudarCor}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} 
          />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;