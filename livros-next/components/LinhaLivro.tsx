import React from "react";
import ControleEditora from "../classes/controle/ControleEditora";
import Livro from "../classes/modelo/Livro";
import { Button } from "react-bootstrap";

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>{" "}
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li className="" key={index}>{autor}</li>
          ))}
        </ul>
      </td>

      <td>
        <Button variant="danger" onClick={() => excluir(livro.codigo)}>
          Excluir
        </Button>
      </td>
    </tr>
  );
};
