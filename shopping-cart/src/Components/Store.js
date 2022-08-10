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

      <div class="border border-solid border-red-200">
        <div
          className="header"
          class="flex w-full justify-start items-start border-solid border-b-2 shadow-sm"
        >
          <p class="font-oswald tracking-widest text-2xl pt-8 pl-8 mb-2">
            Items
          </p>
        </div>
      </div>
    </div>
  );
}

export default Store;
