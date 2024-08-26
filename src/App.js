import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home />

        <About />
        <Service />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
