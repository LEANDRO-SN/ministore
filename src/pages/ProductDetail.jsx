import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../utils/storage";
import { useEffect, useState } from "react";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    console.log("Produto carregado!");
    setProduto(getProductById(id));
    return () => console.log("Saindo da página de detalhes.");
  }, [id]);

  if (!produto) return <p>Produto não encontrado.</p>;

  return (
    <div className="product-detail">
      <h2>{produto.nome}</h2>
      <p>Preço: R$ {produto.preco}</p>
      <p>Descrição: {produto.descricao || "Sem descrição."}</p>
      <button onClick={() => navigate("/produtos")}>Voltar</button>
    </div>
  );
}
