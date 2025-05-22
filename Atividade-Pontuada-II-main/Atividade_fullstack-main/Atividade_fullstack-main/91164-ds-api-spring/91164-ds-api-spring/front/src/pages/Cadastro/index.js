// src/pages/Cadastro/index.js
import FormularioCadastro from '../../components/FormularioCadastro';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function PaginaCadastro() {

  return (
    <div className="pagina-cadastro">
      <div className="container">
        <h2>Cadastro de Novo Usuário</h2>
        <FormularioCadastro />
        
      </div>
    </div>
  );
}

export default PaginaCadastro;
