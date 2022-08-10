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
    <div>
      <p>HI! This is the Store page</p>
    </div>
  );
}

export default Store;
