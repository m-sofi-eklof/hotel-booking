import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import logo from '/logo.png';

function Navbar() {
    const isMobile = useIsMobile();

    return (
        <nav
            aria-label="Main navigation"
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                borderBottom: '1.5px solid rgba(0,0,0,0.1)'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '10px'
                }}
            >
                <Link to="/" aria-label="Meridian Sands, go to homepage">  
                    <img src={logo} alt="minimalistisk vågdesign" style={{ height: '40px' }} />
                </Link>
                <span style={{
                    fontSize: '1rem',
                    margin: 0,
                    fontWeight: 'lighter'
                }}>
                    Meridian Sands
                </span>
            </div>

            <div
                style={{
                    flex: 1,
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '0.8rem',
                    justifyContent: 'flex-start',
                    gap: '2rem',
                    textDecoration:'underline'
                }}
            >
                <Link to="/" style={{ color: '#17048e' }}>Home</Link>
                <Link to="/booking" style={{ color: '#17048e' }}>Book now</Link>
                <Link to="/help" style={{ color: '#17048e', marginLeft: 'auto' }}>Help/Contact us</Link>
            </div>
        </nav>
    );
}

export default Navbar;