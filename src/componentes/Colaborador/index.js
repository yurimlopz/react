import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDefundo}) => {
    return (
        <div className='colaborador'>
            <div  style={{backgroundColor:corDefundo}} className='cabecalho'>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador