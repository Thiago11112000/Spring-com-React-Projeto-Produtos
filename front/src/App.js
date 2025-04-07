import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import { useState, useEffect } from 'react';

function App() {
  // Objeto Produto
  const  produto = {
    codigo: 0,
    nome: '',
    marca: ''
  }
  // useState
  const [btnCadastrar, setCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjtProduto] = useState(produto)
 // useEffect
  useEffect(() => {
    fetch('http://localhost:8080/listar')
    .then(retorno => retorno.json())
    .then(retorno_convertido => setProdutos(retorno_convertido))
  },[]);

  //retorno
 return (
    <div>
      <p>{JSON.stringify(objProduto)} </p>
     <Formulario  botao={btnCadastrar} />
    <Tabela vetor={produtos} />
    </div>
  );
}

export default App;
