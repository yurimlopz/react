
import './Campo.css'
const Campo = ({type='text', label, placeholder, valor, aoAlterado, obrigatorio=false}) => {
    const placeholderModficada = `${placeholder}...`

    const AoDigitado = (evento)=>{
        aoAlterado(evento.target.value)
    }
    return (
        <section className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={AoDigitado}
                required={obrigatorio}
                placeholder ={placeholderModficada}
            />
        </section>

    )
}

export default Campo