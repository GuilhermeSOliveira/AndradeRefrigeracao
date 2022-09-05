import './Servicos.css'

const Servicos = (props) => {
    return (
        <div className='Servicos'>
            <img src='/imagens/icone-servicos.png' alt='icone servicos' />
            <p>{props.tipo}</p>
        </div>
    )
}

export default Servicos