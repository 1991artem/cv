import { Navigate, Route, Routes } from "react-router-dom";
import About from "../about/About";
import Projects from "../projects/Projects";

function AppRouter() {
  return ( 
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
    );
}

export default AppRouter;