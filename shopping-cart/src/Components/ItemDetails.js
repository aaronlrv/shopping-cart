import { useEffect, useState, createContext } from "react";
import { Link, useParams } from "react-router-dom";
import Cart from "./Cart";
import useDarkMode from "./darkMode";
import React from "react";

function ItemDetails({ addToCart, price }) {
  let [item, setItem] = useState(null);
  let [cost, setCost] = useState(null);
  console.log(addToCart);
  let id = useParams().id;
  let passId = id;
  let [setTheme, colorTheme] = useDarkMode();

  useEffect(() => {
    async function gatherData() {
      console.log("id", id);
      let data = await fetch(
        `https://fortnite-api.theapinetwork.com/item/get?id=${id}`,
        { mode: "cors" }
      );
      console.log(data);
      let dataJson = await data.json();
      setItem(dataJson);

      let cost = await price(id);
      setCost(cost);
    }
    gatherData();

    console.log(item);
    console.log(cost);
  }, []);

  //   return item.map((x) => {
  // return item.map((x) => {
  if (item !== null && cost !== null) {
    return (
      <div class="">
        {" "}
        <div class=" h-fit w-screen grid lg:grid-rows-[80px,1fr] lg:grid-cols-[0.66fr,1fr] grid-rows-[80px,1fr,1fr] lg:h-screen">
          <div
            className="header-nav"
            class="h-20 fixed top-0 shadow-md bg-white dark:bg-[#1a181aff] w-full flex justify-between items-center pl-6 md:pl-24 "
          >
            <Link to="/shop">
              <p class="font-oswald text-3xl tracking-wider text-black dark:text-white">
                Daily Store
              </p>
            </Link>
            <ul classname="links" class="flex list-none">
              <li
                onClick={() => setTheme(colorTheme)}
                className="text-3xl pr-6 md:pr-24"
              >
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
              </li>
              <li className="text-3xl pr-6 md:pr-24">
                <Link to="/cart">
                  <ion-icon
                    class="text-black dark:text-white"
                    name="cart-outline"
                  ></ion-icon>
                </Link>
              </li>
              <li className="text-3xl pr-6 md:pr-24">
                <Link to="/">
                  <ion-icon
                    class="text-black dark:text-white"
                    name="home-outline"
                  ></ion-icon>
                </Link>
              </li>
            </ul>
          </div>
          <div></div> {/* placement div that fixes page layout*/}
          <div className="photo" class=" bg-[rgba(39,42,176,0.2)] row-span-2">
            <div class="flex justify-center items-center h-full">
              <div class=" bg-slate-200 h-[25rem] w-[22rem]  shadow-2xl border-2 border-black border-opacity-20 rounded-lg lg:w-[37rem] lg:h-[40rem] ">
                <div class="h-full flex justify-center items-center">
                  <img
                    class="h-[20rem] w-auto lg:h-auto lg:w-auto"
                    src={item.data.item.images.background}
                    alt="product"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-[rgba(57,59,140,0.4)] h-screen dark:bg-[#0c0c0fff lg:h-full]">
            <div class="pl-[2.2rem] dark:bg-[#0c0c0fff]">
              <div class="mt-28 h-36 flex flex-col justify-center items-start dark:bg-[#0c0c0fff] ">
                <h3 class="font-oswald text-8xl dark:text-white ">
                  {item.data.item.name}
                </h3>
                <p class="font-oswald text-3xl dark:text-white ">
                  {item.data.item.description}
                </p>
                <p class="font-oswald text-xl dark:text-white ">
                  Rarity: {item.data.item.rarity}
                </p>
                <p class="font-oswald text-xl dark:text-white ">
                  Type: {item.data.item.type}
                </p>
                <p class="font-oswald text-xl dark:text-white ">
                  Rating: {item.data.item.ratings.avgStars}
                </p>
              </div>

              <div class="flex mt-28 h-36">
                <p class="font-oswald text-5xl dark:text-white ">
                  {cost} VBUCKS
                </p>
              </div>
              {/* <Link to="/cart" state={{ items: item }}> */}
              <div class="flex justify-start- items-center ">
                <button
                  onClick={() => addToCart(item)}
                  class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
                >
                  <span class="w-36 h-36 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                    Add to cart
                  </span>
                  <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                </button>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
