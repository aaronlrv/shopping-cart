import { useContext, useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import useDarkMode from "./darkMode";
import itemContext from "./ItemDetails";

function Cart({ cart }) {
  let [setTheme, colorTheme] = useDarkMode();
  let userCart = cart;
  console.log(userCart);
  // let [cart, setCart] = useState([]);
  // let location = useLocation();
  // let itemData = location.state;
  // let item = itemData.items.data.item;
  // console.log(itemData);
  // console.log(item);

  // useEffect(() => {
  //   // let itemData = location.state;
  //   // let item = itemData.items.data.item;
  //   // console.log(itemData);
  //   // console.log(item);
  //   // setCart((cart) => cart.concat(item));

  //   let oldCart = [...cart];
  //   console.log(oldCart);
  //   oldCart.push(item);

  //   setCart(oldCart);
  // }, []);

  // useEffect(() => {
  //   async function getItem() {
  //     let data = await fetch(
  //       `https://fortnite-api.theapinetwork.com/item/get?id=${id2}`,
  //       { mode: "cors" }
  //     );
  //     let dataJson = await data.json();
  //     let itemInfo = dataJson.data.item;

  //     setCart([...cart, itemInfo]);

  //     console.log(dataJson);
  //   }

  //   getItem();

  // }, []);
  return (
    <div class="">
      <div
        className="header-nav"
        class="h-20 shadow-lg col-span-2 bg-white dark:bg-[#1a181aff]             "
      >
        <div class="flex flex-row items-center w-full h-full">
          <div
            className="header-text"
            class="h-full w-full flex justify-center items-center"
          >
            <Link to="/shop">
              <p class="font-oswald text-3xl tracking-wider text-black dark:text-white">
                Daily Store
              </p>
            </Link>
          </div>
          <div classname="links" class="pr-12 h-full w-auto mt-0">
            <ul class="flex flex-row gap-20  justify-center items-center h-full text-3xl">
              <li>
                <div onClick={() => setTheme(colorTheme)}>
                  {colorTheme === "light" && (
                    <ion-icon class="text-white" name="moon-outline"></ion-icon>
                  )}

                  {colorTheme === "dark" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  )}
                </div>
              </li>
              <Link to="/cart">
                <li>
                  <div class="h-full items-center ">
                    <ion-icon
                      class="text-black dark:text-white"
                      name="cart-outline"
                    ></ion-icon>
                  </div>
                </li>
              </Link>

              <Link to="/">
                <li>
                  <ion-icon
                    class="text-black dark:text-white"
                    name="home-outline"
                  ></ion-icon>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* <div class="h-full w-full flex justify-center items-center">
        <div class="border-solid border-black shadow-2xl h-[50rem] w-[100rem] mt-12 flex  items-center flex-col">
          {/* {cart.map((x) => {
            return (
              <div class="w-[96rem]  bg-slate-50 p-10 mt-8 rounded-md ">
                <div className="content" class="flex flex-row items-center">
                  <div className="left side" class="flex flex-row items-center">
                    <div>
                      <img
                        class="h-20 w-auto"
                        src={x.images.background}
                        alt="product"
                      />
                    </div>
                    <div class="pl-6 pr-2 w-10">{x.name}</div>
                  </div>

                  <div
                    className="right side"
                    class="flex justify-end items-end w-full"
                  >
                    <p>{x.cost + " " + x.obtained_type}</p>
                  </div>
                </div>
              </div>
            );
          })} 
        </div>
      </div> */}
    </div>
  );
}

export default Cart;
