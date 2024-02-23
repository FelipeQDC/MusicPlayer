import './musicplayer.scss';

function Musicplayer(){
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
                        <img src="/pagina-anterior.png" alt="" />
                        <img src="/botao-play.png" alt="" />
                        <img src="/repeat.png" alt="" />
                        <img src="/proxima-pagina.png" alt="" />
                    </div>
                </div>
            </div>
        </div>    

        </>
    )
} export default Musicplayer;