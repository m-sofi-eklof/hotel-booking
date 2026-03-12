import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div style={{ 
        minHeight: '100vh', 
        width: '100vw',
        background: 'radial-gradient(circle at top, #ebdfb4 0%, #ccab7d 55%, #f1b4b5 100%)'
        }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
