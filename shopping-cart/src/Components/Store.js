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
    <div class="h-screen">
      <div className="header" class="bg-[rgba(112,94,191,0.5)] h-20 shadow-lg">
        <div
          className="header-text"
          class="h-full w-full flex justify-center items-center"
        >
          <p class="font-oswald text-3xl tracking-wider">Daily Store</p>
        </div>
      </div>
    </div>
  );
}

export default Store;
