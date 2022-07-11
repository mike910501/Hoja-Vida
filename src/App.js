import {Hoja} from './Componentes/Hoja.js'
import DatosPersonales from './Componentes/DatosPersonales.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Principal'>
      <img 
                className='imagen-hoja'
                src={require('./Imegenes/nombre-michael.jpg')}
                alt='Foto Michael'/>
      <h1>That is my resume here you will find all my work and personal information</h1>
      <DatosPersonales
      />
      
      <Hoja 
      cargo='Analyst'
      empresa='Itau CorpBanca'
      contry='Colombia'
      funciones='I know about BackOffice of treasury, Framework contract, Call Back, '
      logros='Be recognized as a key element in the daily operation of the confirmation factory'
      imagen='michael'
       />
       <Hoja 
      cargo='Auxiliar de Operaciones'
      empresa='Banco de Bogota'
      contry='Colombia'
      funciones='I know about BackOffice of treasury, Framework contract, Call Back, '
      logros='Be recognized as a key element in the daily operation of the confirmation factory'
      imagen='michael'
       />
      </div>
    </div>
  );
}

export default App;
