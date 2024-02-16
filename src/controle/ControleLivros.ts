import Livro from "../modelo/Livro";

const livros: Array<Livro> = [
    new Livro(1, 1, 'Livro 1', 'Resumo 1', ['Autor 1', "Autor 2"]),
    new Livro(2, 2, 'Livro 2', 'Resumo 2', ['Autor 2']),
    new Livro(3, 3, 'Livro 3', 'Resumo 3', ['Autor 3'])
];

class ControleLivro {
    obterLivros(): Array<Livro> {
        return livros;
    }

    incluir(novoLivro: Livro): void {
        const novoCodigo = Math.max(...livros.map(l => l.codigo)) + 1;
        novoLivro.codigo = novoCodigo;
        livros.push(novoLivro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}

export default ControleLivro;
