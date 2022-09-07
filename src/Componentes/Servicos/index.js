import './Servicos.css'

const Servicos = () => {
    return (
        <section className='Servicos'>
            <div>
                <img src='./imagens/eletrica.png' alt='' />
                <h3>Eletrica</h3>
                <p>Somos especializados em eletrica residencial, predial e comercial.</p>
                <p>Leituras de projetos e mais.</p>
            </div>

            <div>
                <img src='./imagens/ar-condicionado.png' alt='' />
                <h3>Instalacao de ar-condicionado</h3>
                <p>Vendemos e instalamos seu ar-condicionado.</p>
                <p>Te indicamos o melhor tipo de ar-condicionado para o seu ambiente e para economia da sua energia.</p>
            </div>

            <div>
                <img src='./imagens/Manutencao.png' alt='' />
                <h3>Manutencao e higienizacao de ar-condicionado</h3>
                <p>A Manutencao e higienizacao sao fundamentais para: prevenir a poliferacao de fungos e bacterias; Manter a qualidade do ar; Reduz os gastos; Aumenta a vida util do aparelho.</p>
            </div>
        </section>
    )
}

export default Servicos