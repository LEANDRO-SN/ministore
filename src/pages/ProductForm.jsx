import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveProduct } from "../utils/storage";
import "./ProductForm.css";

export default function ProductForm() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const novoProduto = {
      id: Date.now().toString(),
      nome,
      preco,
      descricao,
    };
    saveProduct(novoProduto);
    navigate("/produtos");
  }

  return (
    <div className="form-container">
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
          required
        />
        <input
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          placeholder="Preço"
          required
        />
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição (opcional)"
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
