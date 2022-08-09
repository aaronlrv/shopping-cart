function Homepage() {
  return (
    <div class="h-screen bg-[url('/home/aaron/odin-projects/shopping-cart/shopping-cart/src/bg.jpg')]">
      <div
        className="Hero"
        class="h-full w-full flex flex-col justify-center items-center gap-5"
      >
        <h3 class="text-9xl text-white font-blaka  tracking-[0.010em]  ">
          Night Market
        </h3>
        <div>
          <p class="text-2xl text-white ">
            The best place to buy your fornite cosmetics.
          </p>

          <div class=" mt-10  flex col text-white gap-[50px] justify-center items-center w-full">
            <p>About</p>
            <p>Daily Shop</p>
            <p>Popular Items</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
