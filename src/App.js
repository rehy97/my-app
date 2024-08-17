import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import PhoneFAB from './components/PhoneFab';
import PaymentOptions from './components/PaymentOptions';
import HowToOrder from './components/HowToOrder';
import SectionWrapper from './components/SectionWrapper';
import { Divider } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SectionWrapper index={0}>
  <Menu />
</SectionWrapper>
<Divider />
<SectionWrapper index={1}>
  <HowToOrder />
</SectionWrapper>
<Divider />
<SectionWrapper index={2}>
  <PaymentOptions />
</SectionWrapper>
      <Footer />
      <PhoneFAB />
    </div>
  );
}

export default App;
