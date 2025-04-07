import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import { useState, useEffect } from 'react';

function App() {
  // useState
  const [btnCadastrar, setCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);

 // useEffect
  useEffect(() => {
    fetch('http://localhost:8080/listar')
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  },[]);

  //retorno
 return (
    <div>
      <p>{JSON.stringify(produtos)}</p>
     <Formulario  botao={btnCadastrar} />
    <Tabela />
    </div>
  );
}

export default App;
