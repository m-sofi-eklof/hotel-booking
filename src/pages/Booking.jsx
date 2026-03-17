import BookingForm from "../components/BookingForm";
import useIsMobile from "../hooks/useIsMobile";
import birdsEye from '/birds-eye-view.jpg';

function Booking() {
    const isMobile = useIsMobile();

    return (
        <main>
            <div
                role="img"
                aria-label="Aerial view of Meridian Sands hotel"
                style={{
                    width: '100%',
                    height: '96vh',
                    position: 'relative',
                    backgroundImage: `url(${birdsEye})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                {/*fade to bg color*/}
                <div
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '150px',
                        background: 'linear-gradient(to bottom, transparent, #bdac92)',
                        pointerEvents: 'none',
                        zIndex: 1
                    }}
                />
            </div>

            <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '85%',
                marginTop: isMobile ? '-600px' : '-500px',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <BookingForm />
            </div>
        </main>
    );
}

export default Booking;