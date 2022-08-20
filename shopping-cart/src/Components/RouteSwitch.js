import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Store from "./Store";
import Unreleased from "./Unreleased";
import Popular from "./Popular";
import ItemDetails from "./ItemDetails";
import Cart from "./Cart";
import { useState } from "react";

///opsuedo
/// clone the entire cart
/// if item name matches another item in cart
/// change quantity of clone cart to cart + 1
/// else just ad the item with quantity of 1
/// then set cart?
function RouteSwitch() {
  let [cart, setCart] = useState([]);

  function addToCart(item) {
    let cloneCart = [...cart];
    console.log(item);
    console.log(item.data.item.name);

    const foundItem = cloneCart.find(
      (x) => item.data.item.name === x.data.item.name
    );
    if (foundItem === undefined) {
      item.quantity = 1;
      cloneCart.push(item);
    } else {
      console.log(foundItem);
      foundItem.quantity = foundItem.quantity + 1;
      foundItem.data.item.cost =
        foundItem.data.item.cost + foundItem.data.item.cost;
    }

    setCart(cloneCart);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Store />} />
        <Route
          path="/shop/:id"
          element={<ItemDetails addToCart={addToCart} />}
        />

        <Route path="/unreleased" element={<Unreleased />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/cart" element={<Cart cart={[...cart]} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
