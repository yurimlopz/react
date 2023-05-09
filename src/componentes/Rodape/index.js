import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape__footer'>
            <div className='redes__sociais'>
                <ul>
                    <li>
                        <a href='#'>
                            <img src='imagens/fb.png'></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src='imagens/ig.png'></img>
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img src='imagens/tw.png'></img>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <img src='imagens/logo.png'></img>
            </div>
            <div>
                <h6 className='titulo__rodape'>Desenvolvido por Alura</h6>
            </div>
        </footer>
    )
}

export default Rodape