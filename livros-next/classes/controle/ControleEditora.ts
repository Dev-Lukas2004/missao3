import Editora from '../modelo/Editora';
const editoras: Array<Editora> = [
  new Editora(1, 'Editora Abecês'),
  new Editora(2, 'AstroBooks Editora'),
  new Editora(3, 'Livrosfera'),
  new Editora(4, 'Alta Books'),
];

class ControleEditora {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }
}

export default ControleEditora;
