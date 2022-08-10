import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Store from "./Store";
import Unreleased from "./Unreleased";
import Popular from "./Popular";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Store />} />
        <Route path="/unreleased" element={<Unreleased />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
