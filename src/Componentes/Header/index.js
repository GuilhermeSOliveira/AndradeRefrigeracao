import Contato from '../Contato'
import Servicos from '../Servicos'
import Tecnicos from '../Tecnicos'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <section>
                <a href='https://www.instagram.com/andrad_refrigeracao_e_eletrica/'><img src='./imagens/instagram.png' alt='' /></a>
                <div>
                    <img src='./imagens/telefone.png' alt='' />
                    <p>(75) 99808 - 9452 / (75) 99808 - 9453</p>
                </div>
            </section>
            <header>
                <img src='./imagens/Banner-Header.png' alt='' />
                <nav>
                    <a href={<Servicos />}>Nossos Serviços</a>
                    <a href={<Tecnicos />}>Técnicos Responsáveis</a>
                    <a href={<Contato />}>Contato</a>
                </nav>
            </header>
        </div>
    )
}

export default Header