import './Botao.css'

const Botao = (props) =>{
    return(<button className='botao'>
        {/* Utilizado quando coloco o conteudo dentro da aninhado dentro da tag html não importa oq for que tiver dentro da tag ele vai puxar  */}
        {props.texto}
    </button>)
}

export default Botao