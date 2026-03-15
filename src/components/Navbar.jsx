import { Link } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

function Navbar(){
    const isMobile=useIsMobile;
    return(
        <nav
        style={{
            display:'flex',
            alignitems:'center',
            gap:'0.75rem'
        }}>
            <hgroup className="logo-group" 
            style={{
                display: 'flex',
                flexDirection:'row',
                alignItems:'center',
                gap:'0.5rem',
                padding:'10px'
            }}
            >
                <Link to="/" rel="home" className="hotel-logo">
                    <img src="logo.png" alt="Meridian Sands Logo" style={{height: '40px'}}/>
                </Link>
                <h1 className="company-name" style={{
                    fontSize: '1rem', 
                    margin: 0,
                    fontWeight: 'lighter'
                }}>Meridian Sands</h1>
            </hgroup>
            <div className="navigation"
            style={{
                flex:1,
                padding:'1.5rem',
                display:'flex',
                alignItems:'center',
                fontSize:'0.8rem',
                justifyContent:'flex-start',
                textDecoration:'underline',
                gap:'2rem'
            }}>
                <Link to="/" style={{color:'#17048e'}}>Home</Link>
                <Link to="/Booking" style={{color:'#17048e'}}>Book now</Link>
                <Link to="/Help" style={{color:'#17048e', marginLeft:'auto'}}>Help/Contact us</Link>
            </div>
        </nav>
    );
}

export default Navbar;