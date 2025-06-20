import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  console.log("Página inicial carregada!");
  return (
    <div className="home">
      <h2>Bem-vindo à MiniStore!</h2>
      <p>Explore nosso catálogo e cadastre novos produtos.</p>
      <Link to="/produtos">Ver Produtos</Link> | <Link to="/cadastrar">Cadastrar Produto</Link>
    </div>
  );
}
