import React, { useState, useEffect } from 'react';
import ControleLivro from '../controle/ControleLivros';
import ControleEditora from '../controle/ControleEditora';

const LinhaLivro = ({ livro, excluir }) => {
    const controleEditora = new ControleEditora();
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    return (
        <tr >
            <td className="text-start" >
                <button className='btn btn-danger' onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td className="text-start" >{livro.codigo}</td>
            <td className="text-start" >{livro.titulo}</td>
            <td className="text-start" >{nomeEditora}</td>
            <td className="text-start" >{livro.resumo}</td>
            <td className="text-start" >
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);
  
    useEffect(() => {
      const controleLivro = new ControleLivro();
      setLivros(controleLivro.obterLivros());
      setCarregado(true);
    }, [carregado]);
  
    const excluir = (codigoLivro) => {
      const controleLivro = new ControleLivro();
      controleLivro.excluir(codigoLivro);
      setCarregado(false);
    };    

    return (
        <main>
            <div className='container'>
                <h1 className="titulo-left">Catálago de Livros</h1>
                <table className="table table-striped table-hover" >
                    <thead className="table-dark">
                        <tr>
                            <th>Ação</th>
                            <th>Código</th>
                            <th>Título</th>
                            <th>Editora</th>
                            <th>Resumo</th>
                            <th >Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};
export default LivroLista;
