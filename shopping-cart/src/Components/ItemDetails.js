function ItemDetails({ match }) {
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

      <div class=" bg-[#0c0c0fff]">
        <div class="mt-28 pl-10 h-36 flex flex-col justify-center items-start">
          <h3 class="text-white font-oswald text-8xl">Item Name</h3>
          <p class="text-white text-3xl font-oswald pt-2">Item description</p>
          <p class="text-white text-xl font-oswald pt-2">Average Rating:</p>
          <p class="text-white text-xl font-oswald pt-2">Type:</p>
          <p class="text-white text-xl font-oswald pt-2">Series</p>
        </div>

        <div class="flex mt-28 pl-10 h-36">
          <p class="text-white font-oswald text-5xl">500 VBUCKS</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
