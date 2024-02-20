import Editora from '../modelo/Editora';

class ControleEditora {
    private editoras: Array<Editora>;

    constructor() {
        // Inicialização do vetor de editoras com pelo menos três elementos no formato JSON
        this.editoras = [
            new Editora(1, 'Editora A'),
            new Editora(2, 'Editora B'),
            new Editora(3, 'Editora C')
        ];
    }    
    getEditoras(): Array<Editora> {
        return this.editoras;
    }
    getNomeEditora(codEditora: number): string | undefined {
        const editoraEncontrada = this.editoras.find(editora => editora.codEditora === codEditora);
        return editoraEncontrada ? editoraEncontrada.nome : undefined;
    }
}
export default ControleEditora;
