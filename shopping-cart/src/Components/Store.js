import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import Cards from "./Cards";

function Store() {
  let [items, setItems] = useState([]);
  let [type, setType] = useState();
  let [search, setSearch] = useState();
  let [rarity, setRarity] = useState();
  let [refresh, setRefresh] = useState();

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
    <div class=" grid grid-rows-[80px,1fr] grid-cols-[0.25fr,1fr] ">
      <div
        className="header-nav"
        class="  bg-[#1a181aff] h-20 shadow-lg col-span-2"
      >
        <div class="flex flex-row items-center w-full h-full">
          <div
            className="header-text"
            class="h-full w-full flex justify-center items-center"
          >
            <p class="font-oswald text-3xl tracking-wider text-white">
              Daily Store
            </p>
          </div>
          <div classname="links" class="pr-12 h-full w-auto mt-0">
            <ul class="flex flex-row gap-20  justify-center items-center h-full text-3xl">
              <li>
                <div class="h-full items-center ">
                  <ion-icon name="cart-outline"></ion-icon>
                </div>
              </li>
              <li>
                <ion-icon name="menu-sharp"></ion-icon>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-[#0c0c0fff] ">
        <div class="flex w-full justify-start items-start shadow-sm ">
          <p class="text-white font-oswald tracking-widest text-2xl pt-8 pl-8 mb-2">
            Filters
          </p>
        </div>

        <form
          class="flex flex-col justify-start items-start gap-3"
          id="userSelection"
        >
          <div>
            <label htmlFor="search" class="text-white w-12 inline-block pr-10">
              Search
            </label>
            <input id="search" onChange={(e) => setSearch(e.target.value)} />
          </div>
          <div>
            <label htmlFor="rarity" class="text-white w-12 inline-block">
              Rarity:
            </label>
            <select
              form="userSelection"
              id="rarity"
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
            <label htmlFor="type" class="text-white w-12 inline-block">
              Type:
            </label>
            <select
              form="userSelection"
              id="type"
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

      <div className="parent-items" class="bg-[#0c0c0fff] pb-10">
        <div
          className="header"
          class="flex w-full justify-start items-start shadow-sm"
        >
          <p class="font-oswald tracking-widest text-2xl pt-8 pl-8 mb-2 text-white">
            Items
          </p>
        </div>

        <div
          className="items"
          class="grid grid-rows-[repeat(3,18rem)] gap-5 auto-rows-[18rem] grid-cols-3"
        >
          {<Cards type={type} rarity={rarity} search={search} items={items} />}
        </div>
      </div>
    </div>
  );
}

export default Store;
