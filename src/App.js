// import logo from './logo.svg';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<ContactUs/>}/>
          {/* <Route path="/contact" element={<Contact/>}/> */}
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
