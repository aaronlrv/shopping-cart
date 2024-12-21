import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import useDarkMode from "./darkMode";

function Store() {
  let [items, setItems] = useState([]);
  let [type, setType] = useState();
  let [search, setSearch] = useState();
  let [rarity, setRarity] = useState();
  let [setTheme, colorTheme] = useDarkMode();

  useEffect(() => {
    async function getItems() {
      try {
        const response = await fetch("https://fortnite-api.com/v2/shop", { mode: "cors" });
        const data = await response.json();

        if (data.status === 200 && data.data.entries) {
            const formattedItems = data.data.entries
                .filter((entry) => !entry.tracks) // Exclude items with tracks
                .filter((entry) => {
                    if (entry.brItems && entry.brItems.length > 0) {
                        return entry.brItems[0].name && entry.brItems[0].name !== "Unnamed";
                    }
                    return false; // Exclude if `brItems` is not present or valid
                })
                .map((entry) => ({
                    itemId: entry.brItems[0].id,
                    name: entry.brItems[0].name,
                    description: entry.brItems[0].description || "No description available",
                    price: entry.finalPrice || "N/A",
                    image:
                        entry.brItems[0].images?.featured ||
                        entry.brItems[0].images?.icon ||
                        "https://via.placeholder.com/150",
                }));

            setItems(formattedItems);
        }
    } catch (error) {
        console.error("Error fetching shop data:", error);
    }


    }

    getItems();
  }, []);

  return (
    <>
      <div className="2xl:grid grid-rows-[80px,1fr] grid-cols-[0.25fr,1fr] h-screen">
        <div className="header-nav h-20 fixed top-0 shadow-md bg-white dark:bg-[#1a181aff] w-full flex justify-between items-center pl-6 md:pl-24 z-30 col-start-1 col-end-2">
          <Link to="/shop">
            <p className="font-oswald text-3xl tracking-wider text-black dark:text-white">
              Daily Store
            </p>
          </Link>
          <ul className="links flex list-none">
            <li
              onClick={() => setTheme(colorTheme)}
              className="text-3xl pr-6 md:pr-24"
            >
              {colorTheme === "light" ? (
                <ion-icon className="text-white" name="moon-outline"></ion-icon>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
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
                  className="text-black dark:text-white"
                  name="cart-outline"
                ></ion-icon>
              </Link>
            </li>
            <li className="text-3xl pr-6 md:pr-24">
              <Link to="/">
                <ion-icon
                  className="text-black dark:text-white"
                  name="home-outline"
                ></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
        <div className="bg-slate-200 shadow-2xl dark:bg-[#0c0c0fff] hidden 2xl:block h-full w-full row-start-2">
          <p className="font-oswald tracking-widest text-2xl pt-8 pl-8 mb-2 text-black dark:text-white dark:bg-[#0c0c0fff] flex w-full justify-start items-start shadow-sm">
            Filters
          </p>
          <form className="flex flex-col justify-start items-start gap-3 pl-8 dark:bg-[#0c0c0fff]" id="userSelection">
            <div>
              <label htmlFor="search" className="w-12 inline-block pr-10 text-black dark:text-white dark:bg-[#0c0c0fff]">
                Search
              </label>
              <input id="search" className="ml-5" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div>
              <label htmlFor="rarity" className="w-12 inline-block pr-10 text-black dark:text-white">
                Rarity:
              </label>
              <select
                form="userSelection"
                id="rarity"
                className="ml-5"
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
              <label htmlFor="type" className="w-12 inline-block pr-10 text-black dark:text-white">
                Type:
              </label>
              <select
                form="userSelection"
                id="type"
                className="ml-5"
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
        <div className="items grid lg:grid-rows-[repeat(3,18rem)] gap-5 auto-rows-[18rem] lg:grid-cols-3 md:grid-cols-2 dark:bg-[#0c0c0fff] pb-10 row-start-2 col-start-2">
          <Cards type={type} rarity={rarity} search={search} items={items} theme={colorTheme} />
        </div>
      </div>
    </>
  );
}

export default Store;
