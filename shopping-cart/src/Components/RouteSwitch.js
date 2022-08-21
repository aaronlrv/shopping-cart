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

    if (item.data.item.upcoming === true) {
      console.log(item.data.item.name);
      console.log(item.data.item.cost);
      let index = cloneCart.indexOf(item.data.item.cost);
      cloneCart.splice(index, 1);
    }
    setCart(cloneCart);
  }

  async function quantity(x, e) {
    let cloneCart = [...cart];
    let item = x;
    let price = await fetchPrice(item.data.itemId);
    const foundItem = cloneCart.find(
      (x) => item.data.item.name === x.data.item.name
    );

    if (e.target.innerText === "+") {
      foundItem.quantity = foundItem.quantity + 1;
      foundItem.data.item.cost = foundItem.data.item.cost + price;
    } else {
      foundItem.quantity = foundItem.quantity - 1;
      foundItem.data.item.cost = foundItem.data.item.cost - price;

      if (foundItem.quantity === 0 || foundItem.data.item.cost === 0) {
        let index = cloneCart.indexOf(foundItem.data.item.name);
        cloneCart.splice(index, 1);
      }
    }

    console.log(x);
    console.log(e.target.innerText);
    console.log(price);
    setCart(cloneCart);
    ///dont directly mutate
    /// clone the cart
    /// use x name for find
    /// add and delete quantity based on that, the state refresh will also cause a refresh on the page
  }

  async function fetchPrice(id) {
    console.log(id);
    let data = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${id}`,
      { mode: "cors" }
    );

    let dataJson = await data.json();
    console.log(dataJson);

    let price = dataJson.data.item.cost;
    return price;
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

        <Route
          path="/popular/:id"
          element={<ItemDetails addToCart={addToCart} />}
        />

        <Route path="/unreleased" element={<Unreleased />} />
        <Route path="/popular" element={<Popular />} />
        <Route
          path="/cart"
          element={<Cart cart={[...cart]} quantity={quantity} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
