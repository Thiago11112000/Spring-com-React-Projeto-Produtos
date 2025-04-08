import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import { useState, useEffect } from 'react';

function App() {
  // Objeto Produto
  const produto = {
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
  const aoDigitar = (e) => {
    setObjtProduto({...objProduto, [e.target.name]: e.target.value})
  }

  // Cadastrar Produto
  const cadastrar = () => {
    fetch("http://localhost:8080/cadastrar", {
      method: 'POST',
      body: JSON.stringify(objProduto),
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {
      if (retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem);
      } else {
        setProdutos([...produtos, retorno_convertido]);
        alert("Produto Cadastrado com sucesso!");
        limparFormulario();
      }
    })
  }

  // limpar formulário 
  const limparFormulario = () =>{
    setObjtProduto(produto);
  }
  //retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto}/>
      <Tabela vetor={produtos} />
    </div>
  );
}

export default App;
