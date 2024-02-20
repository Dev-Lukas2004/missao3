import React, { useState } from 'react';
import ControleLivro from '../controle/ControleLivros';
import ControleEditora from '../controle/ControleEditora';
import { useNavigate } from 'react-router-dom';

const LivroDados = () => {
    const controleLivro = new ControleLivro();
    const controleEditora = new ControleEditora();

    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const navigate = useNavigate();

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault();

        const novoLivro = {
            codigo: 0,
            titulo,
            resumo,
            autores: autores.split('\n'),
            codEditora,
        };

        controleLivro.incluir(novoLivro);
        navigate('/');
    };

    return (
        <main>
            <div className='container'>
                <h1 className="titulo-left">Dados do Livro</h1>
                <form onSubmit={incluir} >
                    <div className="mb-3 text-start">
                        <label htmlFor="titulo" className="form-label">
                            Título
                        </label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            id="titulo"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className="mb-3 text-start" >
                        <label htmlFor="resumo" className="form-label">
                            Resumo
                        </label>
                        <textarea
                            className="form-control"
                            required
                            id="resumo"
                            rows="3"
                            value={resumo}
                            onChange={(e) => setResumo(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="autores" className="form-label">
                            Autores (separados por linha)
                        </label>
                        <textarea
                            className="form-control"
                            required
                            id="autores"
                            rows="3"
                            value={autores}
                            onChange={(e) => setAutores(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="codEditora" className="form-label">
                            Editora
                        </label>
                        <select
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
                    <div className="text-start" >
                        <button type="submit" className="btn btn-primary">Incluir Livro</button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default LivroDados;
