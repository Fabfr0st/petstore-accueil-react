import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Connexion from "./components/Connexion";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="connexion" element={<Connexion />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
