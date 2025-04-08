import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';
import { useState, useEffect } from 'react';

function App() {
  // Objeto Produto
  const produto = {
    codigo : '',
    nome: '',
    marca: ''
  }

  // useState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
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


    // Remover Produto
    const remover = () => {
      fetch("http://localhost:8080/remover/" + objProduto.codigo, {
        method: 'DELETE',
        body: JSON.stringify(objProduto),
        headers:{
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        alert(retorno_convertido.mensagem);

        //Cópia do vetor de produtos

        let vetorTemp = [...produtos];

        //indice

        let indice = vetorTemp.findIndex((p) =>{
          return p.codigo === objProduto.codigo;
        });

        //remover produto do vetorTemp
        vetorTemp.splice(indice, 1);

        //atualizar o vetor de produtos
        setProdutos(vetorTemp);

       //limparFormulario();
       limparFormulario();
      })
    }

    const alterar = () => {
      fetch("http://localhost:8080/alterar", {
        method: 'PUT',
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
          alert("Produto Alterado com sucesso!");
           //Cópia do vetor de produtos

        let vetorTemp = [...produtos];

        //indice

        let indice = vetorTemp.findIndex((p) =>{
          return p.codigo === objProduto.codigo;
        });

        //alterar produto do vetorTemp
        vetorTemp[indice] = objProduto;

        //atualizar o vetor de produtos
        setProdutos(vetorTemp);
          limparFormulario();
        }
      })
    }
  
  // limpar formulário 
  const limparFormulario = () =>{
    setObjtProduto(produto);
    setBtnCadastrar(true);
  }
  // selecionar produto
 const selecionarProduto = (indice) =>{
   setObjtProduto(produtos[indice]);
   setBtnCadastrar(false);
 }

  //retorno
  return (
    <div>
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objProduto} cancelar={limparFormulario} remover={remover} alterar={alterar}/>
      <Tabela vetor={produtos} selecionar= {selecionarProduto} />
    </div>
  );
}

export default App;
