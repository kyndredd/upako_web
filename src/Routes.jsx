import { Route, Routes } from "react-router-dom";

//Components
import About from "./components/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;