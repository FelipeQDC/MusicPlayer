import './musicplayer.scss';
import { useState,useRef,useEffect  } from 'react';
function Musicplayer(){
    const [Botao,setBotao] = useState("/botao-play.png") 
    const [ClasseBot1,setClasseBot1] = useState("Nada") 
    const [ClasseBot2,setClasseBot2] = useState("Nada")
    const [ClasseBot3,setClasseBot3] = useState("Nada")
    const [ClasseBot4,setClasseBot4] = useState("Nada")
    const [Id,setId] = useState(0)
    const [Repete,setRepete] = useState(false)
    const [RepetCSS,setRepetCSS] = useState("Nada")
    const [ progress,setProgress] = useState(0)
    const [ Tocando,setTocando] = useState(false)
    const Musicas = [
        {
            Nome: 'A Song for the Empty World',
            Banda: 'dystopian tanuki ',
            foto: '/A Song for the Empty World.png',
            Musica: '/A Song for the Empty World.mp3',
            duracao:'4:07'
        },
        {
            Nome: 'Cappuccino',
            Banda: 'floopy',
            foto: '/cappuccino.jpg',
            Musica: '/cappuccino.mp3',
            duracao:'4:33'
        },
        {
            Nome: 'care w/ sea.',
            Banda: 'kinkuo. ',
            foto: '/care w sea.jpg',
            Musica: '/care w sea.mp3',
            duracao:'2:02'
        },
        {
            Nome: 'The Man Behind The Microphone',
            Banda: 'Tom Hodge & Franz Kirmann',
            foto: '/The Man Behind The Microphone.jpg',
            Musica: '/The Man Behind The Microphone.mp3',
            duracao:'4:33'
        },
        {
            Nome: 'passage',
            Banda: 'mistwin',
            foto: '/passage.jpg',
            Musica: '/passage.mp3',
            duracao:'3:32'
        },
        {
            Nome: 'Meandering in Middle Park',
            Banda: 'Haines ',
            foto: '/Meandering in Middle Park.jpg',
            Musica: '/Meandering in Middle Park.mp3',
            duracao:'2:15'
        }
    ]
    const audioref =useRef( new Audio(Musicas[Id].Musica));
    const audio = audioref.current;
    useEffect(() => {
        const audio = audioref.current;

        const onTimeUpdate = () => {
            setProgress((audio.currentTime / audio.duration) * 100);
        };

        audio.addEventListener('timeupdate', onTimeUpdate);

        const onEnded = () => {
            prox();
        };

        audio.addEventListener('ended', onEnded);
        return () => {
            audio.removeEventListener('timeupdate', onTimeUpdate);
            audio.removeEventListener('ended', onEnded);
        };
    }, [Id]);

    const prox = () => {
        if(Id == Musicas.length - 1 && Repete)
        {
            setId(0)
            audio.src = Musicas[0].Musica
            if(Tocando) audio.play()
            return 1
        } 
        if(Id != Musicas.length - 1){
            setId(Id+1)
            audio.src = Musicas[Id + 1].Musica
            if(Tocando) audio.play()
            return 1
        }
        if(!Repete && Id == Musicas.length - 1)
        {
            audio.pause()
            return 1
        }
        return -1
      
    }
    const ant = () => {
        if(Id == 0)
        {
            setId(Musicas.length - 1)
            audio.src = Musicas[Musicas.length - 1].Musica
            if(Tocando) audio.play()
        }
          
        else
        {
            setId(Id-1)
            audio.src = Musicas[Id-1].Musica
            if(Tocando) audio.play()
        }
            
    }

    const animabot = (e) =>{
        if(e == 1)
        {
            setClasseBot1('pop')
            setTimeout(() => {
                setClasseBot1('Nada')
              }, 300);
        }
        if(e == 2)
        {
            setClasseBot2('pop')
            setTimeout(() => {
                setClasseBot2('Nada')
              }, 300);
        }
        if(e == 3)
        {
            setClasseBot3('pop')
            setTimeout(() => {
                setClasseBot3('Nada')
              }, 300);
        }
        if(e == 4)
        {
            setClasseBot4('pop')
            setTimeout(() => {
                setClasseBot4('Nada')
              }, 300);
        }
    }

 

    const togglePlay = () => {
    
      if (Tocando) {
        audio.pause();
        setBotao("/botao-play.png")
      } else {
        audio.play();
        setBotao("/botao-de-pausa.png")
      }
      setTocando(!Tocando)
    };
  
    const HandleProgresso = (event) => {
        const audio = audioref.current;
        const novoProgresso = parseInt(event.target.value);
        const novaPosicao = (novoProgresso / 100) * audio.duration;
        audio.currentTime = novaPosicao;
        setProgress(novoProgresso);
      };

    const HandleRepeat = () => {
        if(RepetCSS == 'Nada')
            setRepetCSS('Selecionado')
        else
            setRepetCSS('Nada')

        setRepete(!Repete)
    }

    return(
        <>
        <div className="flex">
            <div className='card'>
                <img src={Musicas[Id].foto} alt="" className='fundo'/>
                <div className='Menu'>
                    <div className="progresso">
                        <input type="range" name="Progresso" id="prog" min={0} max={100} step={1} value={progress} onChange={HandleProgresso}/>
                    </div>
                    <div className="info">
                        <h2>{Musicas[Id].Nome}</h2>
                        <h3>{Musicas[Id].Banda}</h3>
                    </div>
                    <div className='Controles'>
                        <img className={ClasseBot1} src="/pagina-anterior.png" alt="Musica anterior"  onClick={() => {ant(); animabot(1) }}/>
                        <img src={Botao} className={ClasseBot2} alt="Tocar/pausar" onClick={() => {animabot(2);togglePlay()}}/>
                        <img src="/repeat.png" className={`${ClasseBot3} ${RepetCSS}`} alt="Repetir" onClick={() => {animabot(3); HandleRepeat(); setRepete(!Repete)}} />
                        <img src="/proxima-pagina.png" className={ClasseBot4} alt="Proxima Musica" onClick={() => { prox(); animabot(4)}}/>
                    </div>
                </div>
            </div>
        </div>    
        </>
    )
} export default Musicplayer;