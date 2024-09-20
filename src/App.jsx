import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Bg,
  Hero,
  About,
  Projects,
  Skills,
  Experience,
  Contact,
  Footer,
  Header,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Bg />
      <Header />
      <main className="flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
