// src/pages/Lista/index.js
import ListaDeUsuarios from '../../components/ListaDeUsuarios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function PaginaListaUsuarios() {
  const navigate = useNavigate();

  return (
    <div className="pagina-lista-usuarios">
      <div className="container">
        <h2>Lista de Usuários</h2>
        <ListaDeUsuarios />
        <button onClick={() => navigate('/cadastro')} className="link-cadastro">
          Cadastrar novo usuário
        </button>
        <button onClick={() => navigate('/')} className="link-voltar">
          Voltar para Página Inicial
        </button>
      </div>
    </div>
  );
}

export default PaginaListaUsuarios;
