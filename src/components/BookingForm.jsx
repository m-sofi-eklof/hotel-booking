import {useState} from "react";
import { useLocation } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import Confirmation from './Confirmation';

function BookingForm(){
  const location=useLocation();
  const selectedRoom=location.state?.roomType||"";
  const isMobile=useIsMobile();

  const [formData, setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    checkIn:"",
    checkOut:"",
    guests:"1",
    roomType:selectedRoom
  });

  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId]=useState("");

  const handleChange= (e)=>{
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault();

    const id = `#${Date.now()}`;

    //localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({...formData, id});
    localStorage.setItem("bookings", JSON.stringify(bookings));

    setBookingId(id);
    setConfirmed(true);
  };

  if(confirmed){
    return <Confirmation formData={formData} bookingId={bookingId}/>
  }

  return(
    <div style={{
      maxWidth:'600px',
      margin:'4rem auto',
      padding: isMobile?'1rem':'2rem',
      background:'white',
      borderRadius:'20px',
      boxShadow:'0 8px 30px rgba(0,0,0,0)'
    }}>
      <h2 style={{ marginBottom:'1.5rem', textAlign:'center', color:'#333'}}>Book your stay</h2>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'1rem'}}>

        {/*room*/}
        <div>
          <label style={labelStyle}>Room type</label>
          <select name="roomType" value={formData.roomType} onChange={handleChange} required style={inputStyle}>
            <option value="" disabled>Select a room...</option>
            <option value="Standard">Standard</option>
            <option value="Deluxe">Deluxe</option>
            <option value="Suite">Suite</option>
          </select>
        </div>

        {/*name*/}
        <div style={{display:'flex', gap:'1rem', flexDirection:isMobile?'column':'row'}}>
          <div style={{flex:1}}>
            <label style={labelStyle}>First name</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} required style={inputStyle} />
          </div>
          <div style={{flex:1}}>
            <label style={labelStyle}>Last name</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} required style={inputStyle} />
          </div>
        </div>

        {/*email*/}
        <div>
          <label style={labelStyle}>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle}/>
        </div>

        {/*dates*/}
        <div style={{display:'flex', gap:'1rem', flexDirection:isMobile?'column':'row'}}>
          <div style={{flex:1}}>
            <label style={labelStyle}>Check-in</label>
            <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required style={inputStyle}/>
          </div>
          <div style={{flex:1}}>
            <label style={labelStyle}>Check-out</label>
            <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required style={inputStyle}/>
          </div>
        </div>

        {/*no of guest*/}
        <div>
          <select name="guests" value={formData.guests} onChange={handleChange} style={inputStyle}>
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
          </select>
        </div>
        <button type='submit'
        style={{
          marginTop:'1rem',
          padding:'0.9rem',
          background:'#100b31',
          color:'white',
          border:'none',
          borderRadius:'10px',
          fontSize:'1rem',
          cursor:'pointer'

        }}>
          Book
        </button>
      </form>
    </div>
  );
}

const labelStyle={
  display:'block',
  marginBottom:'0.25rem',
  fontWeight:'bold',
  color:'#333'
};

const inputStyle={
  width:'100%',
  padding:'0.6rem 0rem',
  borderRadius:'8px',
  boxSizing:'borderBox'
};

export default BookingForm;

