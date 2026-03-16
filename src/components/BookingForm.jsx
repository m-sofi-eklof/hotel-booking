import { useState } from "react";
import { useLocation } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";
import Confirmation from './Confirmation';

const today = new Date().toISOString().split('T')[0];

const PRICES={Standard:120, Deluxe:180, Suite:270};

function BookingForm() {
    const location = useLocation();
    const selectedRoom = location.state?.roomType || "";
    const isMobile = useIsMobile();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        checkIn: "",
        checkOut: "",
        guests: "1",
        roomType: selectedRoom
    });

    const [confirmed, setConfirmed] = useState(false);
    const [bookingId, setBookingId] = useState("");
    const [errors, setErrors]=useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({...errors, [e.target.name]:""});
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.roomType) newErrors.roomType = 'Please select a room';
        if (!formData.firstName) newErrors.firstName = 'Required';
        if (!formData.lastName) newErrors.lastName = 'Required';
        if (!formData.email) newErrors.email = 'Required';
        if (!formData.checkIn) newErrors.checkIn = 'Required';
        if (!formData.checkOut) newErrors.checkOut = 'Required';
        if (formData.checkIn && formData.checkOut && formData.checkOut <= formData.checkIn)
            newErrors.checkOut = 'Must be after check-in';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors=validate();
        if(Object.keys(newErrors).lenght>0){
          setErrors(newErrors);
          return;
        }
        const id = `#${Date.now()}`;
        const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push({ ...formData, id });
        localStorage.setItem("bookings", JSON.stringify(bookings));
        setBookingId(id);
        setConfirmed(true);
    };

    const nights= formData.checkIn&&formData.checkOut ?
    Math.max(0(newDate(formData.checkOut)-new Date(formData.checkIn))/(1000*60*60*24))
    :0;
    const total =nights*(PRICES[formData.roomType]||0);
    if (confirmed) {
        return <Confirmation formData={formData} bookingId={bookingId} />;
    }

    return (
        <div style={{
            maxWidth: '600px',
            margin: '4rem auto',
            padding: isMobile ? '1rem' : '2rem',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
        }}>
            <h2 style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#333' }}>Book your stay</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <legend style={{ ...labelStyle, marginBottom: '1rem' }}>Room & guests</legend>

                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="roomType" style={labelStyle}>Room type</label>
                        <select id="roomType" name="roomType" value={formData.roomType} onChange={handleChange} required style={inputStyle}>
                            <option value="" disabled>Select a room...</option>
                            <option value="Standard">Standard</option>
                            <option value="Deluxe">Deluxe</option>
                            <option value="Suite">Suite</option>
                        </select>
                         {errors.roomType && <p style={errorStyle}>{errors.roomType}</p>}
                    </div>

                    <div>
                        <label htmlFor="guests" style={labelStyle}>Guests</label>
                        <select id="guests" name="guests" value={formData.guests} onChange={handleChange} style={inputStyle}>
                            <option value="1">1 guest</option>
                            <option value="2">2 guests</option>
                            <option value="3">3 guests</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <legend style={{ ...labelStyle, marginBottom: '1rem' }}>Personal details</legend>

                    <div style={{ display: 'flex', gap: '1rem', flexDirection: isMobile ? 'column' : 'row' }}>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="firstName" style={labelStyle}>First name</label>
                            <input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required style={inputStyle} />
                            {errors.firstName && <p style={errorStyle}>{errors.firstName}</p>}
                        </div>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="lastName" style={labelStyle}>Last name</label>
                            <input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required style={inputStyle} />
                                {errors.lastName && <p style={errorStyle}>{errors.lastName}</p>}
                        </div>
                    </div>

                    <div style={{ marginTop: '1rem' }}>
                        <label htmlFor="email" style={labelStyle}>Email</label>
                        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                        {errors.email && <p style={errorStyle}>{errors.email}</p>}
                    </div>
                </fieldset>

                <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
                    <legend style={{ ...labelStyle, marginBottom: '1rem' }}>Stay dates</legend>

                    <div style={{ display: 'flex', gap: '1rem', flexDirection: isMobile ? 'column' : 'row' }}>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="checkIn" style={labelStyle}>Check-in</label>
                            <input id="checkIn" type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} required min={today} style={inputStyle} />
                            {errors.checkIn && <p style={errorStyle}>{errors.checkIn}</p>}
                        </div>
                        <div style={{ flex: 1 }}>
                            <label htmlFor="checkOut" style={labelStyle}>Check-out</label>
                            <input id="checkOut" type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} required min={formData.checkIn || today} style={inputStyle} />
                            {errors.checkOut && <p style={errorStyle}>{errors.checkOut}</p>} 
                        </div>
                    </div>
                </fieldset>

                {nights > 0 && formData.roomType && (
                    <div style={{
                        background: '#f9f5ee',
                        borderRadius: '10px',
                        padding: '1rem',
                        fontSize: '0.9rem'
                    }}>
                        <p>{nights} night{nights > 1 ? 's' : ''} × {PRICES[formData.roomType]} £</p>
                        <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>Total: {total} £</p>
                    </div>
                )}

                <button
                    type="submit"
                    style={{
                        marginTop: '1rem',
                        padding: '0.9rem',
                        background: '#100b31',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}
                >
                    Book
                </button>
            </form>
        </div>
    );
}

const labelStyle = {
    display: 'block',
    marginBottom: '0.25rem',
    fontWeight: 'bold',
    color: '#333'
};

const inputStyle = {
    width: '100%',
    padding: '0.6rem 0.8rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '0.9rem',
    boxSizing: 'border-box'
};

const errorStyle = {
    color: 'red',
    fontSize: '0.75rem',
    marginTop: '0.25rem'
};

export default BookingForm;