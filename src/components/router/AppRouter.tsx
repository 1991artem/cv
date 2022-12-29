import { Navigate, Route, Routes } from "react-router-dom";
import About from "../about/About";
import Certificate from "../certificate/Certificate";
import Projects from "../projects/Projects";

function AppRouter() {
  return ( 
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/*" element={<Navigate to="/about" />} />
    </Routes>
    );
}

export default AppRouter;