import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import LoginSoon from "./pages/LoginSoon";
import Donate from "./pages/Donate";
import DonateSoon from "./pages/DonateSoon";
import Newsletter from "./pages/Newsletter";
import NewsletterSoon from "./pages/NewsletterSoon";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-red-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/loginsoon" element={<LoginSoon />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/donatesoon" element={<DonateSoon />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/newslettersoon" element={<NewsletterSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
