import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemDetails({ match }) {
  let [item, setItem] = useState([]);
  let id = useParams().id;

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
  return (
    <div class="h-screen grid grid-rows-[80px,1fr] grid-cols-[0.66fr,1fr]">
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

      <div className="photo" class=" bg-[rgba(39,42,176,0.2)] row-span-2">
        <div class="flex justify-center items-center h-full">
          <div class="h-[40rem] bg-slate-200 w-[37rem] shadow-2xl border-2 border-black border-opacity-20 rounded-lg ">
            <div class="h-full flex justify-center items-center">
              <img
                src="https://dropin-bucket.mativecdn.com/cosmetics/br/cid_a_379_athena_commando_f_vampirehunter/icon.png"
                alt="product"
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div class=" bg-[#0c0c0fff] pl-[2.2rem]">
        <div class="mt-28 h-36 flex flex-col justify-center items-start">
          <h3 class="text-white font-oswald text-8xl">{item.data.item.name}</h3>
          <p class="text-white text-3xl font-oswald pt-2">
            {item.data.item.description}
          </p>
          <p class="text-white text-xl font-oswald pt-2">
            Rarity: {item.data.item.rarity}
          </p>
          <p class="text-white text-xl font-oswald pt-2">
            Type: {item.data.item.type}
          </p>
          <p class="text-white text-xl font-oswald pt-2">
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
  );
}

export default ItemDetails;
