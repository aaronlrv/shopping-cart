import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import useDarkMode from "./darkMode";

function Store() {
  let [items, setItems] = useState([]);
  let [type, setType] = useState();
  let [search, setSearch] = useState();
  let [rarity, setRarity] = useState();
  let [refresh, setRefresh] = useState();
  let [setTheme, colorTheme] = useDarkMode();

  useEffect(() => {
    async function getItems() {
      let dataItems = await fetch(
        "https://fortnite-api.theapinetwork.com/store/get",
        { mode: "cors" }
      );

      let dataJson = await dataItems.json();
      console.log(dataJson);
      setItems(dataJson.data);
      console.log(dataJson.data);
    }

    getItems();
  }, []);

  return (
    <div class="">
      <div class=" 2xl:grid grid-rows-[80px,1fr] grid-cols-[0.25fr,1fr] ">
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

        <div class="bg-slate-200 shadow-2xl dark:bg-[#0c0c0fff] hidden 2xl:inline ">
          <div class="flex w-full justify-start items-start shadow-sm ">
            <p class="font-oswald tracking-widest text-2xl pt-8 pl-8 mb-2 text-black dark:text-white ">
              Filters
            </p>
          </div>

          <form
            class="flex flex-col justify-start items-start gap-3 pl-8"
            id="userSelection"
          >
            <div>
              <label
                htmlFor="search"
                class="w-12 inline-block pr-10 text-black dark:text-white "
              >
                Search
              </label>
              <input
                id="search"
                class="ml-5"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="rarity"
                class="w-12 inline-block pr-10 text-black dark:text-white "
              >
                Rarity:
              </label>
              <select
                form="userSelection"
                id="rarity"
                class="ml-5"
                onChange={(e) => setRarity(e.target.value)}
              >
                <option value="not selected">Not Selected</option>
                <option value="rare">Rare</option>
                <option value="uncommon">Uncommon</option>
                <option value="epic">Epic</option>
                <option value="legendary">Legendary</option>
                <option value="mythic">Mythic</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="type"
                class="w-12 inline-block pr-10 text-black dark:text-white "
              >
                Type:
              </label>
              <select
                form="userSelection"
                id="type"
                class="ml-5"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="not selected">Not Selected</option>
                <option value="emote">Emote</option>
                <option value="outfit">Outfit</option>
                <option value="wrap">Wrap</option>
                <option value="glider">Glider</option>
                <option value="pickaxe">Pickaxe</option>
              </select>
            </div>
          </form>
        </div>

        <div
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
        </div>
      </div>
    </div>
  );
}

export default Store;
