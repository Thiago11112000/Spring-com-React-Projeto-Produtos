import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import { useState } from 'react';
function App() {
  const [btnCadastrar, setCadastrar] = useState(true);

  return (
    <div>
     <Formulario  botao={btnCadastrar} />
    <Tabela />
    </div>
  );
}

export default App;
