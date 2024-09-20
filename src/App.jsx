import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Bg,
  Hero,
  Navbar,
  About,
  Projects,
  Skills,
  Experience,
  Contact,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Bg />
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
