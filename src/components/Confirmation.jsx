function Confirmation({formData, bookingId}){
    return(
      <div style={{
        maxWidth:'600px',
        margin:'4rem auto',
        padding:'2rem',
        background:'white',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        textAlign: 'center',
        color:'#392714'
      }}>
        <h2 style={{fontSixe:'2rem', marginBottom:'0.5rem'}}>Booking confirmed</h2>
        <p style={{color:'#666', marginBottom:'2rem'}}>Bookning number: <strong>{bookingId}</strong></p>

        <div
        style={{
          background:'#f9f5ee',
          borderRadius:'12px',
          padding:'1.5rem',
          textAlign:'left'
        }}>
          <p><strong>Room:</strong> {formData.roomType}</p>
          <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
          <p><strong>E-mail:</strong> {formData.email}</p>
          <p><strong>Check-in:</strong> {formData.checkIn}</p>
          <p><strong>Check-out:</strong> {formData.checkOut}</p>
          <p><strong>Antal gäster:</strong> {formData.guests}</p>
        </div>
      </div>
    );

};

export default Confirmation;