import "./styles.css";
import Faculty from "./faculty";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Randomlayout from "./randomlayout";
import Footer from "./Footer";
import Blog from "./Blog";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Randomlayout></Randomlayout>

        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/slider" element={<Randomlayout />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
        {/*  */}
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}
