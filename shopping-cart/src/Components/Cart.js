import { useContext, useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import useDarkMode from "./darkMode";
import itemContext from "./ItemDetails";

function Cart({ cart, quantity }) {
  let [setTheme, colorTheme] = useDarkMode();

  let userCart = cart;
  let total = [];
  userCart.map((x) => {
    total.push(x.data.item.cost);
  });
  let totalCart = total.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(total);
  console.log(userCart);
  return (
    <div class="h-screen">
      <div
        className="header-nav"
        class="h-20 fixed top-0 shadow-md bg-white  dark:bg-[#1a181aff] w-full flex justify-between items-center pl-6 md:pl-24 "
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

      <div class="h-full w-full flex justify-center items-center">
        <div class="border-solid border-black shadow-2xl w-[17rem] h-[35rem]  mt-12 flex  items-center flex-col overflow-auto 2xl:h-[50rem] 2xl:w-[100rem] sm:h-[40rem] sm:w-[35rem] lg:h-[40rem] lg:w-[50rem] xl:w-[80rem] xl:h-[45rem] dark:bg-zinc-900  ">
          {userCart.map((x) => {
            return (
              <div class=" w-[15rem]  bg-slate-50 p-10 mt-8 rounded-md sm:w-[30rem] 2xl:w-[96rem] lg:w-[45rem] xl:w-[75rem dark:bg-zinc-700  ">
                <div className="content" class="flex flex-row items-center">
                  <div className="left side" class="flex flex-row items-center">
                    <div>
                      <img
                        class="h-24  w-auto 2xl:h-20"
                        src={x.data.item.images.background}
                        alt="product"
                      />
                    </div>
                    <div class="hidden pl-6 pr-2 w-10 sm:inline dark:text-white">
                      {x.data.item.name}
                    </div>
                  </div>

                  <div
                    className="right side"
                    class="flex flex-col justify-end items-end w-full dark:text-white"
                  >
                    <p>{x.quantity + " " + "Items"}</p>
                    <p>{x.data.item.cost + " " + x.data.item.obtained_type}</p>
                    <div class="flex gap-10 text-2xl dark:text-white">
                      <button onClick={(e) => quantity(x, e)}>+ </button>
                      <button onClick={(e) => quantity(x, e)}>-</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div class="pt-12">
            <p class="text-2xl dark:text-white">Total Price: {totalCart}</p>
          </div>
          <div class="pt-4">
            <button
              onClick={() => alert("Thank you for shopping!")}
              class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter rounded-lg group bg-slate-50 text-black dark:text-white dark:bg-zinc-800 "
            >
              <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56 dark:bg-zinc-300"></span>
              <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-zinc-400 dark:to-zinc-700 "></span>
              <span class="relative">Checkout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
