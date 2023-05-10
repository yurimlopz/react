import {AiFillCloseCircle} from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDefundo, aoDeletar}) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={aoDeletar}/>
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