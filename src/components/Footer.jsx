function Footer() {
    return (
        <footer style={{
            background: '#100b31',
            color: '#aaa',
            textAlign: 'center',
            padding: '1.5rem',
            fontSize: '0.8rem',
            marginTop: 'auto'
        }}>
            © {new Date().getFullYear()} Meridian Sands. All rights reserved.
        </footer>
    );
}

export default Footer;