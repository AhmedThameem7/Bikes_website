import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Home.jsx";
import Adventure from "./Adventure.jsx";
import Roadster from "./Roadster.jsx";
import Sports from "./Sports.jsx";
import About from './About.jsx';
import Contact from "./Contact.jsx";
import "./App.css";
import Footer from './components/Footer.jsx';
import 'fontsource-barlow-condensed';
import 'fontsource-inter';
import 'fontsource-montserrat';
import 'fontsource-oswald';
import 'fontsource-orbitron';
import '@fontsource/red-hat-display'
import ScrollToTop from "./components/ScrollToTop";
function App() {
  // const inputRef=useRef(null);
  // const handlecontactclick=()=>{
  //   inputRef.current.focus()
  // }
  return (
    <BrowserRouter>
        <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/roadster" element={<Roadster />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
