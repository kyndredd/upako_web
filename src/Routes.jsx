import { Route, Routes } from "react-router-dom";

//Components
import Home from "./components/Home";
import FindTenants from "./components/FindTenants";
import FindRentals from "./components/FindRentals";
import Pricing from "./components/Pricing";
import About from "./components/About"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/FindTenants" element={<FindTenants />} />
      <Route path="/FindRentals" element={<FindRentals />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;