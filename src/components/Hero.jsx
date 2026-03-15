import { Link } from "react-router-dom"
import useIsMobile from '../hooks/useIsMobile';
import isMobile from "../hooks/useIsMobile";

function Hero(){
    const isMobile=useIsMobile();

    return(
        <header className="hero" style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start'
        }}>
            <div
                style={{
                    position:'relative',
                    width: '100vw',
                    height: isMobile? '96vh':'65vh',
                    backgroundImage: "url('/hotel-view.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: isMobile? 'start': 'center',//vertical
                    alignItems: 'center', //horizontal
                    textAlign: 'center'
                }}>       
                    {/*gradient fade to bg color*/}
                    <div style={{
                    position:'absolute',
                    bottom:0,
                    left:0,
                    right:0,
                    height:isMobile?'150px':'100px',
                    background:'linear-gradient(to bottom, transparent, #bdac92)',
                    pointerEvents:'none',
                    zIndex:1
                    }}></div>
                    <h2 style={{
                        fontSize: isMobile?'2.5rem':'4rem', 
                        margin:0,
                        fontWeight:'inherit',
                        color: '#2c200e',
                        marginTop:isMobile?'75px':'-100px'
                    }}>
                        Your horizon, defined
                    </h2>
                </div>
        </header>
    )
}

export default Hero;
