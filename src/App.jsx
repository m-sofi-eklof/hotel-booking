import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Navbar from './components/Navbar';
import Help from './pages/Help';

function App() {
  return (
    <Router>
      <div style={{ 
        minHeight: '100vh', 
        width: '100vw',
        display:'flex',
        flexDirection: 'column',
       // background: 'radial-gradient(circle at top, #d5c691 0%, #dcb988 55%, #f1b4b5 100%)'
        background:'#bdac92'
        }}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="help" element={<Help/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App
