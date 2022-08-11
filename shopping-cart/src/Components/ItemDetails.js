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
          <div class="h-[40rem] bg-slate-200 w-[37rem] shadow-2xl border-2 border-black border-opacity-20 rounded-lg "></div>
        </div>
      </div>

      <div class=" bg-[#0c0c0fff]"></div>
    </div>
  );
}

export default ItemDetails;
