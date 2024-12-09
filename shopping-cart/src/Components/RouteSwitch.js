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
    console.log(item);
    console.log(item.name);
    let price = await fetchPrice(item.id); // Adjusted to use "id"

    const foundItem = cloneCart.find(
      (x) => item.name === x.name // Adjusted to match JSON structure
    );
    if (foundItem === undefined) {
      item.quantity = 1;
      cloneCart.push(item);
    } else {
      console.log(foundItem);
      foundItem.quantity = foundItem.quantity + 1;
      foundItem.totalCost = foundItem.totalCost + price; // Adjusted to match "totalCost"
    }

    if (
      item.upcoming === true || // Adjusted to match "upcoming" field
      item.obtained_type === "none" // Adjusted to match "obtained_type"
    ) {
      console.log(item.name);
      console.log(item.totalCost); // Adjusted to match "totalCost"
      let index = cloneCart.indexOf(item.name); // Adjusted for "name"
      cloneCart.splice(index, 1);
    }
    setCart(cloneCart);
  }

  async function quantity(x, e) {
    let cloneCart = [...cart];
    let item = x;
    let price = await fetchPrice(item.id); // Adjusted to use "id"
    const foundItem = cloneCart.find(
      (x) => item.name === x.name // Adjusted to match JSON structure
    );

    if (e.target.innerText === "+") {
      foundItem.quantity = foundItem.quantity + 1;
      foundItem.totalCost = foundItem.totalCost + price; // Adjusted to match "totalCost"
    } else {
      foundItem.quantity = foundItem.quantity - 1;
      foundItem.totalCost = foundItem.totalCost - price; // Adjusted to match "totalCost"

      if (foundItem.quantity === 0 || foundItem.totalCost === 0) {
        let index = cloneCart.indexOf(foundItem.name); // Adjusted for "name"
        cloneCart.splice(index, 1);
      }
    }

    console.log(x);
    console.log(e.target.innerText);
    console.log(price);
    setCart(cloneCart);
  }

  async function fetchPrice(id) {
    console.log(id);
    let data = await fetch(
      `https://fortnite-api.com/v2/cosmetics/br/${id}`, // Adjusted API call
      { mode: "cors" }
    );

    let dataJson = await data.json();
    console.log(dataJson);

    let price = dataJson.data?.rarity?.value === "gaminglegends" ? 1500 : 800; // Example logic preserved
    return price;
  }


  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shopping-cart" element={<Homepage />} />
        <Route path="/shopping-cart/" element={<Homepage />} />

        <Route path="/shop" element={<Store />} />
        <Route
          path="/shop/:id"
          element={<ItemDetails addToCart={addToCart} price={fetchPrice} />}
        />

        <Route
          path="/popular/:id"
          element={<ItemDetails addToCart={addToCart}/>}
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
