import './Tecnicos.css'

const Tecnicos = (props) => {
    return (
        <div className='tecnicos'>
            <h3>{props.nome}</h3>
            <ul>
                <li>{props.especializacao1}</li>
                <li>{props.especializacao2}</li>
            </ul>
        </div>
    )
}

export default Tecnicos