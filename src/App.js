// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './components/About';
import Breadcome from './components/Breadcome';
import Productdetails from './pages/Productdetails';
import Cart from './pages/Cart';


function App() {
  return (
    <div className='container'>
      <Header />
      <Breadcome />
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/product-details" element={<Productdetails />} />
          <Route path="/cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>


      <Footer/>
      
    </div>
  );
}

export default App;
