import Livro from '../modelo/Livro';

const livros: Array<Livro> = [
  new Livro(1, 1, 'Noções básicas de programação para iniciantes', 
  'Um livro para leitores com experiência zero em codificação irá guiá-lo passo a passo através do básico. Você aprenderá como escolher um IDE e escrever o primeiro programa. O livro o familiariza com o Java Development Kit e o Java Runtime Environment e fornece a descrição de cada parte do código em exemplos. Ele serve como um bom ambiente preliminar antes de você se aprofundar em assuntos mais sérios.', ['Nathan Clark']),

  new Livro(2, 2, 'Pensando em Java', 'Este livro oferece uma abordagem bastante revigorante para explicar os fundamentos de Java. Ele tem foco no design e comportamento da linguagem Java e inclui muitas explicações detalhadas. Você entenderá como cada tópico se encaixa na POO. Os assuntos básicos são totalmente abordados nas primeiras 200 páginas do livro. A parte maior pode ajudá-lo a cobrir o novo terreno. É um daqueles livros aos quais você retornará mesmo depois de anos estudando e codificando. Embora alguns dos exemplos estejam um pouco desatualizados, este livro ainda é uma fonte importante para os alunos, porque na verdade o ensina a pensar como um programador Java e o incentiva a codificar.', ['Bruce Eckel']),

  new Livro(3, 3, 'Java em poucas palavras: uma referência rápida para desktop', 'Este livro foi escrito não apenas para programadores Java experientes, mas também para iniciantes. A mais nova (sétima) edição é baseada no Java 11, ou seja, tem tudo que um desenvolvedor iniciante precisa saber. O livro não é longo, há muitos exemplos, APIs Java, Utilitários de simultaneidade Java e melhores práticas de desenvolvimento são revistos. O livro é fácil de ler. Você pode aprender o básico da linguagem, bem como técnicas úteis de programação e novas tendências em Java', ['Ben Evans', 'David Flanagan']),
  
  new Livro(4, 4, 'Use a cabeça!: C#', 'O Use a Cabeça! C# – 2ª Edição é uma experiência completa de aprendizagem para a programação com C#, .NET Framework e IDE Visual Studio. Construído para ser assimilado rapidamente pela sua mente, este livro cobre o C# & .NET 4.0 e o Visual Studio 2010, e ensina tudo, desde a herança até a serialização. Você consultará seus dados com o LINQ, desenhará gráficos e animação e aprenderá as classes e a programação orientada a objetos, tudo através do desenvolvimento de jogos, fazendo projetos práticos e resolvendo quebra-cabeças.', ['Andrew Stellman', 'Jennifer Greene']),
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
