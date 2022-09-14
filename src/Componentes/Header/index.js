import Contato from '../Contato'
import Servicos from '../Servicos'
import Tecnicos from '../Tecnicos'
import './Header.css'

const Header = () => {

    function toggleMenu () {
        const nav = document.getElementById('nav')

        nav.classList.toggle('active')
    }

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
                <nav id='nav'>
                    <button onClick={toggleMenu}>
                        <span id='hamburguer'></span>
                    </button>
                    <ul id='menu'>
                        <li><a href={<Servicos />}>Nossos Serviços</a></li>
                        <li><a href={<Tecnicos />}>Técnicos Responsáveis</a></li>
                        <li><a href={<Contato />}>Contato</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header