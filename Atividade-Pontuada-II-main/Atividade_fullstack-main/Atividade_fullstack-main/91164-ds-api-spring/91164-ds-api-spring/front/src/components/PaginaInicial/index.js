import './styles.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/vit.png';

function PaginaInicial() {
    const navigate = useNavigate();

    return (
        <div className="pagina-inicial-container">
            <img src={logo} alt="Logo Esporte Clube Bahia" className="logo" />
            <h1>Bem-vindo(a) ao Cadastro de Jogadores</h1>
            <p>Gerencie jogadores do Esporte Clube Bahia de forma prática.</p>

            <div className="botoes">
                <button onClick={() => navigate('/')}>
                    Cadastrar Jogadores
                </button>
                <button onClick={() => navigate('/usuarios')}>
                    Ver Jogadores Cadastrados
                </button>
            </div>
        </div>
    );
}

export default PaginaInicial;
