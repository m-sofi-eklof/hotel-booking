import { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";

function Help() {
    const isMobile = useIsMobile();
    const [formData, setFormData] = useState({ email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div style={{
            maxWidth: '900px',
            margin: '1rem auto',
            padding: isMobile ? '1rem' : '2rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '3rem'
        }}>

            {/*phone contact info*/}
            <div style={{ flex: 1, width:isMobile?'90%':'45%'}}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Contact us</h2>
                <p style={{ color: '#555', marginBottom: '2rem' }}>
                    Wish to reach us directly? Our staff on site are happy to help!
                </p>

                <div style={{
                    background: 'white',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                    color:'#392714'
                }}>
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Phone number</h3>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>+123 123 45 67</p>

                    <hr style={{ margin: '1rem 0', border: 'none', borderTop: '1px solid #eee' }} />

                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Phone hours</h3>
                    <p style={{ margin: '0.2rem 0', color: '#555', fontSize: '0.9rem' }}>Monday – Friday: 09:00 – 20:00</p>
                    <p style={{ margin: '0.2rem 0', color: '#555', fontSize: '0.9rem' }}>Saturday: 10:00 – 16:00</p>
                    <p style={{ margin: '0.2rem 0', color: '#555', fontSize: '0.9rem' }}>Sunday: 10:00 – 14:00</p>
                </div>
            </div>

            {/*form*/}
            <div style={{ flex: 1, width:isMobile?'90%':'45%' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Send a message</h2>
                <p style={{ color: '#555', marginBottom: '2rem' }}>
                    Submit any questions you may have in this form, and our team will get back to you shortly.
                </p>
                {submitted ? (
                    <div style={{
                        background: 'white',
                        borderRadius: '15px',
                        padding: '2rem',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                        textAlign: 'center',
                        marginTop: '4rem',
                        color:'#392714'
                    }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message sent!</h3>
                        <p style={{ color: '#555' }}>We will get back to you within 1-2 business days.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{
                        background: 'white',
                        borderRadius: '15px',
                        padding: '1.5rem',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <h3 style={{ margin: 0, marginBottom: '0.5rem' }}>Send a message</h3>

                        <div>
                            <label style={labelStyle}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                        </div>

                        <div>
                            <label style={labelStyle}>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                style={{ ...inputStyle, resize: 'vertical' }}
                            />
                        </div>

                        <button type="submit" style={{
                            padding: '0.9rem',
                            background: '#100b31',
                            color: 'white',
                            border: 'none',
                            borderRadius: '10px',
                            fontSize: '1rem',
                            cursor: 'pointer'
                        }}>
                            Send
                        </button>
                    </form>
                )}
            </div>

        </div>
    );
}

const labelStyle = {
    display: 'block',
    marginBottom: '0.25rem',
    fontWeight: 'bold',
    fontSize: '0.85rem',
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

export default Help;