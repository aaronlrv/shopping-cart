import { useEffect, useState, createContext } from "react";
import { Link, useParams } from "react-router-dom";
import Cart from "./Cart";
import useDarkMode from "./darkMode";
import React from "react";

function ItemDetails({ addToCart, showPrice }) {
  const [item, setItem] = useState(null);
  const [price, setPrice] = useState(null);
  const { id } = useParams();
  const [setTheme, colorTheme] = useDarkMode();

  useEffect(() => {
    async function fetchCosmeticDetails() {
      try {
        const cosmeticResponse = await fetch(
          `https://fortnite-api.com/v2/cosmetics/br/${id}`,
          { mode: "cors" }
        );
        const cosmeticData = await cosmeticResponse.json();

        if (cosmeticData.status === 200 && cosmeticData.data) {
          setItem(cosmeticData.data);

          if (showPrice) {
            await fetchPriceFromShop(id);
          }
        } else {
          console.error("Cosmetic details not found.");
        }
      } catch (error) {
        console.error("Error fetching cosmetic details:", error);
      }
    }

    async function fetchPriceFromShop(itemId) {
      try {
        console.log("Item ID:", itemId); // Log the item ID being searched
    
        const shopResponse = await fetch("https://fortnite-api.com/v2/shop", {
          mode: "cors",
        });
        const shopData = await shopResponse.json();
    
        console.log("Shop Data:", shopData); // Log the full shop data response
    
        if (shopData.status === 200 && shopData.data.entries) {
          const entry = shopData.data.entries.find((entry) =>
            entry.brItems?.some((brItem) => brItem.id === itemId)
          );
    
          console.log("Matching Entry:", entry); // Log the found entry or undefined
    
          if (entry) {
            const finalPrice = entry.finalPrice || "N/A";
            console.log("Final Price:", finalPrice); // Log the extracted price
            setPrice(finalPrice);
          } else {
            console.warn("Price not found for item:", itemId);
            setPrice("N/A");
          }
        } else {
          console.error("Shop data not found or invalid structure.");
        }
      } catch (error) {
        console.error("Error fetching price from shop:", error);
      }
    }
    
    

    fetchCosmeticDetails();
  }, [id, showPrice]);


  //   return item.map((x) => {
  // return item.map((x) => {
  if (item !== null) {
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
            <div class="flex justify-center items-center h-screen w-full">
              <div class=" bg-slate-200 h-[25rem] w-[22rem]  shadow-2xl border-2 border-black border-opacity-20 rounded-lg md:h-[30rem] md:w-[27rem] lg:w-[37rem] lg:h-[40rem] ">
                <div class="h-full flex justify-center items-center">
                  <img
                    class="h-[20rem] w-auto md:h-[25rem] lg:h-auto lg:w-auto"
                    src={item.images.icon}
                    alt={item.name}
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-[rgba(57,59,140,0.4)] h-screen dark:bg-[#0c0c0fff] lg:h-full lg:overflow-clip">
            <div class="pl-[2.2rem] dark:bg-[#0c0c0fff]">
              <div class="mt-28 h-36 flex flex-col justify-center items-start dark:bg-[#0c0c0fff] ">
                <h3 class="font-oswald pb-2 pt-24 text-5xl sm:text-7xl lg:text-8xl   dark:text-white ">
                  {item.name}
                </h3>
                <p class="font-oswald text-3xl dark:text-white pt-2 pb-2 ">
                {item.description}
                </p>
                <p class="font-oswald text-xl dark:text-white">
                  Type:  {item.type.displayValue}
                </p>
                <p class="font-oswald text-xl dark:text-white">
                  Rarity: {item.rarity.displayValue}
                </p>
                {showPrice && price && (
                  <p class="font-oswald text-3xl dark:text-white">
                    Price: {price} VBUCKS
                  </p>
                )}

                {showPrice && price && price !== "N/A" && (
                  <div class="flex justify-start items-center pt-2 pb-2">
                    <button
                      onClick={() => addToCart({ ...item, price })}
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
                )} {/* Conditionally cheks for price and renders the add to cart depending on whether it has a price or not*/} 
              </div>
              {/*
              <div class="flex mt-28 h-36">
                <p class="font-oswald text-5xl dark:text-white ">
                  {cost} VBUCKS
                </p>
              </div>
              */}
              {/* <Link to="/cart" state={{ items: item }}> */}


              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
