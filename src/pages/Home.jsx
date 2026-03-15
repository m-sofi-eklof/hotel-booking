import { useState, useEffect } from "react";
import Hero from '../components/Hero';
import RoomCard from '../components/RoomCard';
import useIsMobile from "../hooks/useIsMobile";

function Home() {
    const isMobile=useIsMobile();

    const containerStyle = {
    width: isMobile ? '95vw' : '85vw',
    margin: '0 auto',
    marginTop:isMobile?'-275px':'-125px',
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'center' : 'center',
    gap: '20px',
};

    return (
        <div style={{
            paddingBottom:isMobile?'30px':'0px'
        }}>
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