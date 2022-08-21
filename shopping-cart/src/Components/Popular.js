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
      <div class=" grid grid-rows-[80px,1fr] grid-cols-[0.25fr,1fr] ">
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

        <div>
          {items.map((x) => {
            return <div>{x.images.transparent}</div>;
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
