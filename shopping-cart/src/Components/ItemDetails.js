import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useDarkMode from "./darkMode";

function ItemDetails({ match }) {
  let [item, setItem] = useState(null);
  let id = useParams().id;
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
    }
    gatherData();
  }, []);

  //   return item.map((x) => {
  // return item.map((x) => {
  if (item !== null) {
    return (
      <div class="">
        {" "}
        <div class=" h-screen grid grid-rows-[80px,1fr] grid-cols-[0.66fr,1fr]">
          <div
            className="header-nav"
            class="h-20 shadow-lg col-span-2 bg-[#1a181aff]"
          >
            <div class="flex flex-row items-center w-full h-full">
              <div
                className="header-text"
                class="h-full w-full flex justify-center items-center"
              >
                <button class="bg-white" onClick={() => setTheme(colorTheme)}>
                  set theme
                </button>
                <Link to="/shop">
                  <p class="font-oswald text-3xl tracking-wider text-white">
                    Daily Store
                  </p>
                </Link>
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
          <div className="photo" class=" bg-[rgba(39,42,176,0.2)] row-span-2">
            <div class="flex justify-center items-center h-full">
              <div class="h-[40rem] bg-slate-200 w-[37rem] shadow-2xl border-2 border-black border-opacity-20 rounded-lg ">
                <div class="h-full flex justify-center items-center">
                  <img
                    src={item.data.item.images.background}
                    alt="product"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          <div class="pl-[2.2rem] bg-[rgba(57,59,140,0.4)] dark:bg-[#0c0c0fff] ">
            <div class="mt-28 h-36 flex flex-col justify-center items-start">
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
              <p class="text-white font-oswald text-5xl">
                {item.data.item.cost} VBUCKS
              </p>
            </div>

            <div class="flex justify-start- items-center ">
              <a
                href="#_"
                class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span class="w-36 h-36 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Add to cart
                </span>
                <span class="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
