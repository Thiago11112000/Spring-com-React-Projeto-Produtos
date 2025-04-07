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
// obtendo os dados do formulário
const aoDigitar = (e) =>{
  setObjtProduto({...objProduto, [e.target.name]  : e.target.value})
}
  //retorno
 return (
    <div>
      <p>{JSON.stringify(objProduto)} </p>
     <Formulario  botao={btnCadastrar}eventoTeclado={aoDigitar} />
    <Tabela vetor={produtos} />
    </div>
  );
}

export default App;
