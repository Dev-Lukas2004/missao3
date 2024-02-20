import React, { useState } from "react";
import styles from '@/styles/Home.module.css'
import ControleLivro from "../classes/controle/ControleLivros";
import ControleEditora from "../classes/controle/ControleEditora";
import { useRouter } from "next/router";
import Livro from "@/classes/modelo/Livro";

const controleEditora = new ControleEditora();
const baseURL = 'http://localhost:3000/api/livros';

const LivroDados = () => {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();
  const router = useRouter();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));
  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(Number(event.target.value));
  };

  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  


  const incluirLivro = async (livro: Livro): Promise<boolean> => {
    try {
      const resposta = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livro),
      });

      return resposta.ok;
    } catch (erro) {
      console.error('Erro ao incluir livro:', erro);
      return false;
    }
  };

 
  const incluir = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const novoLivro: Livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    const sucesso = await incluirLivro(novoLivro);

    if (sucesso) {
      router.push('/LivroLista')
    }
  };

  return (
    <div className="container">
    <main>        
      <div className="container">
        <h1 className="text-center mt-4">Incluir Livro</h1>
        <form onSubmit={incluir} className=" mt-4">
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">
              Título
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="resumo" className="form-label">
              Resumo
            </label>
            <textarea
              required
              className="form-control"
              id="resumo"
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="autores" className="form-label">
              Autores (separados por linha)
            </label>
            <textarea
              required
              className="form-control"
              id="autores"
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="codEditora" className="form-label">
              Editora
            </label>
            <select
              required
              className="form-select"
              id="codEditora"
              value={codEditora}
              onChange={tratarCombo}
            >
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Incluir Livro
          </button>
        </form>
      </div>
    </main>
    </div>
  );
};

export default LivroDados;
