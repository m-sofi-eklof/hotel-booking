import { Link } from "react-router-dom"

function Hero(){

    return(
        <header className="hero" style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start'
        }}>
            
            <hgroup className="logo-group" 
            style={{
                display: 'flex',
                flexDirection:'row',
                padding:'10px'
            }}
            >
                <Link to="/" rel="home" className="hotel-logo">
                    <img src="logo.png" alt="Meridian Sands Logo" style={{height: '60px'}}/>
                </Link>
                <h1 className="company-name" style={{
                    fontSize: '0.8rem', 
                    margin: 0,
                    fontWeight: 'lighter'
                }}>Meridian Sands</h1>
            </hgroup>
            <div
                style={{
                    width: '100vw',
                    height: '65vh',
                    backgroundImage: "url('/hotel-view.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',

                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',//vertical
                    alignItems: 'center', //horizontal
                    textAlign: 'center'
                }}>
                    <h2 style={{
                        fontSize: '4rem', 
                        margin:0,
                        color: '#2c200e'
                    }}>
                        Your horizon, defined
                    </h2>
                </div>
        </header>
    )
}

export default Hero;
