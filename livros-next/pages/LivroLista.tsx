import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { LinhaLivro } from "@/components/LinhaLivro";

const baseURL = "http://localhost:3000/api/livros";

const LivroLista: React.FC = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const obterLivros = async () => {
    try {
      const resposta = await fetch(baseURL);
      const dados = await resposta.json();
      setLivros(dados);
      setCarregado(true);
    } catch (erro) {
      console.error("Erro ao obter livros:", erro);
    }
  };

  const excluirLivro = async (codigo: number) => {
    try {
      const resposta = await fetch(`${baseURL}/${codigo}`, {
        method: "DELETE",
      });
      return resposta.ok;
    } catch (erro) {
      console.error("Erro ao excluir livro:", erro);
      return false;
    }
  };

  const excluir = async (codigo: number) => {
    
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setCarregado(false);
    }
  };

  useEffect(() => {
    obterLivros();
  }, [carregado]);

  return (
    <div className="container">
      <Head>
        <title>Livro Lista</title>
      </Head>

      <div>
        <h1>Livros</h1>
        <table className="table table-striped table-hover text-start ">
          <thead className="table-dark">
            <tr>
              <th className="col-lg-2">Título</th>
              <th className="col-lg-7">Resumo</th>
              <th className="col-lg-1">Editora</th>
              <th className="col-lg-2">Autor</th>
              <th  >Ação</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (<LinhaLivro key={livro.codigo as number} livro={livro} excluir={() => excluir(livro.codigo)}/>))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LivroLista;
