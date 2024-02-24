import './musicplayer.scss';
import { useState } from 'react';
function Musicplayer(){
    const [Botao,setBotao] = useState("/botao-play.png") 
    const tratarbotao = () => {
        if(Botao == "/botao-play.png")
            setBotao("/botao-de-pausa.png")
        else
            setBotao("/botao-play.png")
    }

    

    return(
        <>
        <div className="flex">
            <div className='card'>
                <img src="/A Song for the Empty World.png" alt="" className='fundo'/>
                <div className='Menu'>
                    <div className="progresso">

                    </div>
                    <div className="info">
                        <h2>Nome da musica</h2>
                        <h3>Banda</h3>
                    </div>
                    <div className='Controles'>
                        <img src="/pagina-anterior.png" alt="Musica anterior" />
                        <img src={Botao} alt="Tocar/pausar" onClick={() => tratarbotao()}/>
                        <img src="/repeat.png" alt="Repetir" />
                        <img src="/proxima-pagina.png" alt="Proxima Musica" />
                    </div>
                </div>
            </div>
        </div>    

        </>
    )
} export default Musicplayer;