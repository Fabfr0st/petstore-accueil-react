import "./App.css";
import "./components/style.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Connexion from "./components/Connexion";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Inscription from "./components/Inscription";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="connexion" element={<Connexion />} />
        <Route path="contact" element={<Contact />} />
        <Route path="inscription" element={<Inscription />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
