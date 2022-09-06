import Servicos from '../Servicos'
import './Header.css'

const Header = () => {
    return (
        <div className='cabecalho'>
            <header>
                <img src='./imagens/Banner-Header.png' alt='' />
                <nav>
                    <a href={<Servicos />}>Nossos Serviços</a>
                    <a href={<Servicos />}>Técnicos Responsáveis</a>
                    <a href={<Servicos />}>Contato</a>
                </nav>
            </header>
        </div>
    )
}

export default Header