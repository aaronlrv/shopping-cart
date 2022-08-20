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

    if (cloneCart.length === 0) {
      item.quantity = 1;
      cloneCart.push(item);
      setCart(cloneCart); /// if no items in cart dont run comparison
    } else {
      let newArr = cloneCart.map((x) => {
        if (item.data.item.name === x.data.item.name) {
          x.quantity = x.quantity + 1;
          return x;
        } else {
          item.quantity = 1;
          cloneCart.push(item);
          return item;
        }
      });
      console.log(newArr);
      setCart(newArr);
    }
  }

  // cart.map((x) => {
  //   x.quantity = 1;
  // });
  // let objCopy;
  // function addToCart(item) {
  //   cart.map((x) => {
  //     if (item.data.item.name === x.data.item.name) {
  //       objCopy = x;
  //       objCopy.quantity = objCopy.quantity + 1;
  //       /// add quantity
  //     }
  //   });
  //   setCart([...cart, item]);
  //}

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
