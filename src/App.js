import { useState } from 'react';
import Banner from './componente/Banner'
import Formulario from './componente/Formulario';

function App() {
  const [colaboradores, setColaboradores]= useState([])

  const novoColaborador= (colaborador)=>{
   
    setColaboradores([...colaboradores, colaborador])

    console.log(colaboradores)
    
  }
  return (
    <div className="App">
      <Banner />
      <Formulario colaborador={novoColaborador}/>
    </div>
  );
}

export default App;
