import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h2>MiniStore</h2>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/cadastrar">Cadastrar</Link>
      </nav>
    </header>
  );
}
