import { useNavigate } from "react-router-dom";

const IMAGE_PATHS = [
    '/standard-room.jpg',
    '/deluxe-room.jpg',
    '/suite.jpg'
];

function RoomCard({ roomType, imageIndex }) {
    const navigate = useNavigate();

    return (
        <div
        style={{
            position: 'relative',
            height: '225px',
            width:'25vw',
            borderRadius: '20px',
            backgroundImage: `url(${IMAGE_PATHS[imageIndex % IMAGE_PATHS.length]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden',
            border: '1.75px solid #100b31',
            boxShadow: '0 24px 60px #1b1b1bf7',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <header style={{
                padding: '1rem 1.5rem'
            }}>
                <h3 style={{
                    margin: 0,
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    textShadow: '0 1px 4px rgba(0,0,0,0.6)'
                }}>
                    {roomType}
                </h3>
            </header>

            <button
            type="button"
            style={{
                width: '100%',
                height: '40px',
                borderRadius:'0px',
                background: 'white',
                border: 'none',
                fontSize: '0.8rem',
                color: '#000000',
                cursor: 'pointer',
                fontWeight: 'bold'
            }}
            onClick={() => navigate('/booking', { state: { roomType } })}
            >
                Book this room
            </button>
        </div>
    );
}

export default RoomCard;