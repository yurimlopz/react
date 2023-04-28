
import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <CampoTexto label ="Nome"/>
      <CampoTexto label ="Cargo"/>
      <CampoTexto label ="Imagem"/>
    </div>
  );

}

export default App;
  
