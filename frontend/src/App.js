import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services'
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id='about'><About /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
