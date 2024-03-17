import './App.css';
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Footer from './Components/Footer';
import {Fade , Slide , } from "react-awesome-reveal";


function App() {
  return (
    <Fade delay={100}>
      <main className=' font-Lora bg-black'>
        <Navbar />
        <Home />
        <Footer />
      </main>
    </Fade>
  );
}

export default App;
