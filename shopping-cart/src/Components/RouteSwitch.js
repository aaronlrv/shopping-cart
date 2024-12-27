import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
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

  async function addToCart(item) {
    let cloneCart = [...cart];
    console.log("Adding to cart:", item);
  
    const foundItem = cloneCart.find((x) => item.name === x.name);
  
    if (!foundItem) {
      item.quantity = 1;
      item.totalCost = item.price;
      cloneCart.push(item);
    } else {
      foundItem.quantity += 1;
      foundItem.totalCost += item.price;
    }
  
    setCart(cloneCart);
  }

  async function quantity(item, e) {
    let cloneCart = [...cart];
    const foundItem = cloneCart.find((x) => x.name === item.name);
    const foundItemInitialPrice = foundItem.totalCost
  
    if (!foundItem) return; // Safety check in case the item doesn't exist
  
    if (e.target.innerText === "+") {
      // Increment quantity
      foundItem.quantity += 1;
      foundItem.totalCost += foundItem.price; // Update total cost
    } else if (e.target.innerText === "-") {
      // Decrement quantity
      if (foundItem.quantity > 1) {
        foundItem.quantity -= 1;
        foundItem.totalCost -= foundItem.price; // Update total cost
      } else {
        // Remove item if quantity is 1 and minus is clicked
        cloneCart = cloneCart.filter((x) => x.name !== item.name);
      }
    }
  
    setCart(cloneCart); // Update cart state
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shopping-cart" element={<Homepage />} />
        <Route path="/shopping-cart/" element={<Homepage />} />

        <Route path="/shop" element={<Store />} />
        <Route
          path="/popular/:id"
          element={<ItemDetails showPrice={false} addToCart={addToCart} />}
        />
        <Route
          path="/shop/:id"
          element={<ItemDetails showPrice={true} addToCart={addToCart} />}
        />


        <Route path="/unreleased" element={<Unreleased />} />
        <Route path="/popular" element={<Popular />} />
        <Route
          path="/cart"
          element={<Cart cart={[...cart]} quantity={quantity} />}
        />
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
