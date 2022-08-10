import { useEffect, useState } from "react";

function Store() {
  let [items, setItems] = useState();

  useEffect(() => {
    async function getItems() {
      let dataItems = await fetch(
        "https://fortnite-api.theapinetwork.com/store/get",
        { mode: "cors" }
      );

      let dataJson = await dataItems.json();
      console.log(dataJson);
      setItems(dataItems);
    }

    getItems();
  }, []);

  return (
    <div class="h-screen grid grid-rows-[80px,1fr] grid-cols-[0.25fr,1fr] ">
      <div
        className="header-nav"
        class="bg-[rgba(112,94,191,0.5)] h-20 shadow-lg col-span-2"
      >
        <div class="flex flex-row items-center w-full h-full">
          <div
            className="header-text"
            class="h-full w-full flex justify-center items-center"
          >
            <p class="font-oswald text-3xl tracking-wider">Daily Store</p>
          </div>
          <div classname="links" class="pr-12 h-full w-auto mt-0">
            <ul class="flex flex-row gap-20  justify-center items-center h-full text-3xl">
              <li>
                <div class="h-full items-center ">
                  <ion-icon name="cart-sharp"></ion-icon>
                </div>
              </li>
              <li>
                <ion-icon name="menu-sharp"></ion-icon>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <p> hi</p>
      </div>

      <div className="parent-items" class="border border-solid border-red-200">
        <div
          className="header"
          class="flex w-full justify-start items-start border-solid border-b-2 shadow-sm"
        >
          <p class="font-oswald tracking-widest text-2xl pt-8 pl-8 mb-2">
            Items
          </p>
        </div>

        <div
          className="items"
          class="grid grid-rows-[repeat(3,18rem)] grid-cols-3"
        >
          <div
            className="card"
            class=" border-solid border-slate-300 h-72 gap-6 m-5 border-2 grid grid-rows-[100,100] auto-rows-[100px]  grid-cols-2 shadow-xl transition ease-in-out delay-100  hover:scale-105 duration-300 "
          >
            <div class="h-full flex justify-start items-center row-span-2">
              <img
                class="h-48 w-auto "
                src="https://dropin-bucket.mativecdn.com/cosmetics/br/pickaxe_id_558_smallfrymale_ybd34/icon.png"
                alt="fortnite skin"
              />
            </div>
            <div class="flex justify-center items-center">
              <p class="font-chinese text-3xl tracking-wider"> Item name</p>
            </div>
            <div class="flex justify-center items-center">
              <a href="#_" class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span class="relative">View More</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Store;
