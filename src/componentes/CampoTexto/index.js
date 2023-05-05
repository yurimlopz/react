
import './CampoTexto.css'
const CampoTexto = (props) => {
    const placeholderModficada = `${props.placeholder}...`

    const AoDigitado = (evento)=>{
        props.aoAlterado(evento.target.value)
    }
    return (
        <section className="campo__texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={AoDigitado} required={props.obrigatorio} placeholder ={placeholderModficada}/>
        </section>

    )
}

export default CampoTexto