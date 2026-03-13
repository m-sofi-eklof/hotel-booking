import { useState, useEffect } from "react";
import Hero from '../components/Hero';
import RoomCard from '../components/RoomCard';

function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const containerStyle = {
    width: isMobile ? '95vw' : '80vw',
    margin: '0 auto',
    marginTop: '-100px',
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'stretch' : 'center',
    gap: '20px'
};

    return (
        <div>
            <Hero />
            <div style={containerStyle}>
                <RoomCard roomType="Standard" imageIndex={0} />
                <RoomCard roomType="Deluxe" imageIndex={1} />
                <RoomCard roomType="Suite" imageIndex={2} />
            </div>
        </div>
    );
}

export default Home;