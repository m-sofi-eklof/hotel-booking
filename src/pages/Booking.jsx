import BookingForm from "../components/BookingForm";
import useIsMobile from "../hooks/useIsMobile";

function Booking(){
  const isMobile=useIsMobile();

  return(
    <div>
      <div style={{
        width: '100vw',
        height:'96vh',
        position:'relative',
        backgroundImage: "url('/birds-eye-view.jpg')",
        backgroundSize: 'cover',
        overflow:'hidden',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        {/*gradient fade to bg color*/}
        <div style={{
          position:'absolute',
          bottom:0,
          left:0,
          right:0,
          height:'150px',
          background:'linear-gradient(to bottom, transparent, #bdac92)',
          pointerEvents:'none',
          zIndex:1
        }}></div>
      </div>
      <div
      style={{
        position:'relative',
        zIndex:2,
        maxWidth:'85%',
        marginTop: isMobile?'-700px':'-600px',
        marginLeft:'auto',
        marginRight:'auto'
        
      }}>
        <BookingForm/>
      </div>
      
    </div>
  );

};
export default Booking;
