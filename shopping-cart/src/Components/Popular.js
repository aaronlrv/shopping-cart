import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import useDarkMode from "./darkMode";

function Popular() {
  let [items, setItems] = useState([]);
  let [setTheme, colorTheme] = useDarkMode();

  useEffect(() => {
    async function getItems() {
      let dataItems = await fetch(
        "https://fortnite-api.theapinetwork.com/items/popular",
        { mode: "cors" }
      );

      let dataJson = await dataItems.json();
      console.log(dataJson);
      setItems(dataJson.entries[1].entries);
      console.log(dataJson.entries[1].entries);
    }

    getItems();
  }, []);

  return (
    <div class="">
      <div class="  ">
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
                      <ion-icon
                        class="text-white"
                        name="moon-outline"
                      ></ion-icon>
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

        <div class="grid grid-rows-2 grid-cols-3">
          {items.map((x) => {
            return (
              <>
                <Link to={`/shop/${x.itemId}`}>
                  <div
                    className="card"
                    class="h-72 gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-xl transition ease-in-out delay-100  hover:scale-105 duration-300 bg-slate-100 w-[30rem]  "
                  >
                    <div class="h-full flex justify-start items-center row-span-2">
                      <img
                        class="h-48 w-auto "
                        src={x.images.transparent}
                        alt="fortnite skin"
                      />
                    </div>
                    <div class="flex flex-col justify-center items-center">
                      <p class="font-chinese text-3xl tracking-wider text-black">
                        {x.name}
                      </p>
                      <p class="text-">{x.description}</p>
                    </div>
                    <div class="flex justify-center items-center">
                      <a
                        href={x.itemId}
                        class="relative inline-block text-lg group"
                      >
                        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#272AB0] 0 rounded-lg group-hover:text-white">
                          <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                          <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#272AB0] group-hover:-rotate-180 ease"></span>
                          <span class="relative">View More</span>
                        </span>
                        <span
                          class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                          data-rounded="rounded-lg"
                        ></span>
                      </a>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>

        {/* <div
          className="parent-items"
          class="pb-10 bg-[rgba(39,42,176,0.2)] dark:bg-[#0c0c0fff] "
        >
          <div
            className="header"
            class="flex w-full justify-start items-start shadow-sm"
          >
            <p class="font-oswald tracking-widest text-2xl pt-8 pl-8 mb-2 text-black dark:text-white">
              Items
            </p>
          </div>

          <div
            className="items"
            class="grid grid-rows-[repeat(3,18rem)] gap-5 auto-rows-[18rem] grid-cols-3"
          >
            {
              <Cards
                type={type}
                rarity={rarity}
                search={search}
                items={items}
                theme={colorTheme}
              />
            }
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default Popular;
