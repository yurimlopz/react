import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props)=>{
    const css = { backgroundColor:props.corPrimaria}
    return (
       (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} value={props.corSecundaria} type='color' className='input__cor'/>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {/* Renderiza todos os colaboradores dentro de time */}
            {props.colaboradores.map( (colaborador,indice) => {
                return <Colaborador corDeFundo={props.corSecundaria} key={indice} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} aoDeletar={props.aoDeletar}/>
            })}
            </div>
        </section>
        : ''
    )
}
export default Time