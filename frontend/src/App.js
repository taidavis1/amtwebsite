import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Views/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <main className=' font-Lora bg-black'>
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
}

export default App;
