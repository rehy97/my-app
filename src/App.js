import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import PhoneFAB from './components/PhoneFab';
import PaymentOptions from './components/PaymentOptions';
import HowToOrder from './components/HowToOrder';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Menu />
      <HowToOrder />
      <PaymentOptions />
      <Footer />
      <PhoneFAB />
    </div>
  );
}

export default App;
