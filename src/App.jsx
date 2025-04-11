import { BrowserRouter, Routes, Route } from "react-router-dom";

// internal imports

import Body from "./component/Body/Body";
import LandingPage from "./Pages/LandingPage/LandingPage";
import About from "./component/About/About";
import Projects from "./component/Projects/Project";
import Contact from "./component/Contact/Contact";
function App() {
  return (
    <div className=" font-trebuchet bg-gradientColor1">
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<LandingPage />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
