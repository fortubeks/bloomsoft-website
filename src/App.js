import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ForgotPassword, Pricing, Register } from './pages';
import Home from './pages/Home/Home';
import { Footer } from './components';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
