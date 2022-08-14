import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Store from "./Store";
import Unreleased from "./Unreleased";
import Popular from "./Popular";
import ItemDetails from "./ItemDetails";
import Cart from "./Cart";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Store />} />
        <Route path="/shop/:id" element={<ItemDetails />} />

        <Route path="/unreleased" element={<Unreleased />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
