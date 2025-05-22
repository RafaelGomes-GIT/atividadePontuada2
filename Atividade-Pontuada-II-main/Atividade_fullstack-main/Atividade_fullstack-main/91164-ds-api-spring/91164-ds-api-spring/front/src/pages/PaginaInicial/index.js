// src/pages/PaginaInicial/index.js
import { useNavigate } from 'react-router-dom';
import './styles.css';

function PaginaInicial() {
  const navigate = useNavigate();

  return (
    <div className="pagina-inicial">
      <div className="container">
        <h2>Página Inicial</h2>
        <button onClick={() => navigate('/cadastro')} className="link-cadastro">
          Cadastrar novo usuário
        </button>
        <button onClick={() => navigate('/usuarios')} className="link-lista">
          Ver lista de usuários
        </button>
      </div>
    </div>
  );
}

export default PaginaInicial;
