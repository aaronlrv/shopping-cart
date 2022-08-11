function ItemDetails({ match }) {
  return (
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
  );
}

export default ItemDetails;
