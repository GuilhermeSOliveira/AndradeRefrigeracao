import './Tecnicos.css'

const Tecnicos = (props) => {
    return (
        <div className='tecnicos'>
            <h3>{props.nome}</h3>
            <p>{props.especializacao1}</p>
            <p>{props.especializacao2}</p>
        </div>
    )
}

export default Tecnicos