import { Link } from "react-router-dom";
import { getProducts } from "../utils/storage";
import { useEffect, useState } from "react";
import "./ProductList.css";

export default function ProductList() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(getProducts());
  }, []);

  return (
    <div className="product-list">
      <h2>Produtos Cadastrados</h2>
      <p>Total de produtos: {produtos.length}</p>

      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        produtos.map((prod) => (
          <div key={prod.id} className="product-item">
            {prod.nome} - R$ {prod.preco}
            <Link to={`/produtos/${prod.id}`}>Ver detalhes</Link>
          </div>
        ))
      )}
    </div>
  );
}
