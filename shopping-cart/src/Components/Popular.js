import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import useDarkMode from "./darkMode";

function Popular() {
  let [items, setItems] = useState([]);
  let [setTheme, colorTheme] = useDarkMode();


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fortnite-api.com/v2/cosmetics/new", { mode: "cors" });
        const data = await response.json();

        // Access items from the API response
        const cosmetics = data.data.items.br || []; // Ensure `br` is accessed safely
        setItems(cosmetics);
      } catch (error) {
        console.error("Error fetching cosmetics data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div class="dark:bg-[#0c0c0fff] h-full w-full ">
      <div
        className="header-nav"
        class="h-20 fixed top-0 shadow-md bg-white dark:bg-[#1a181aff] w-full flex justify-between items-center pl-6 md:pl-24 z-30"
      >
        <Link to="/shop">
          <p class="font-oswald text-3xl tracking-wider text-black dark:text-white">
            Daily Store
          </p>
        </Link>
        <ul classname="links" class="flex list-none">
          <li
            onClick={() => setTheme(colorTheme)}
            className="text-3xl pr-6 md:pr-24"
          >
            {colorTheme === "light" && (
              <ion-icon class="text-white" name="moon-outline"></ion-icon>
            )}
            {colorTheme === "dark" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </li>
          <li className="text-3xl pr-6 md:pr-24">
            <Link to="/cart">
              <ion-icon
                class="text-black dark:text-white"
                name="cart-outline"
              ></ion-icon>
            </Link>
          </li>
          <li className="text-3xl pr-6 md:pr-24">
            <Link to="/">
              <ion-icon
                class="text-black dark:text-white"
                name="home-outline"
              ></ion-icon>
            </Link>
          </li>
        </ul>
      </div>
      <div class="dark:bg-[#0c0c0fff] h-full mt-20">
        <div class="flex flex-col justify-center items-center gap-5 mt-5  dark:bg-[#0c0c0fff] min-w-full">
          {/* <div>
            <h3 class="font-oswaldtracking-widest text-3xl">
              Popular items in the past 60 minutes
            </h3> */}
        </div>
        <div class=" h-full flex justify-center items-center gap-72  dark:bg-[#0c0c0fff] pb-[6px]">
          <div class="lg:grid grid-rows-2 grid-cols-3 gap-12">
            {items.map((x) => {
                console.log(x); // Log each item

              return (
                <>
                  <Link to={`/popular/${x.id}`}>
                    <div
                      className="card"
                      class="h-[24rem] w-[300px] gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-md transition ease-in-out delay-100  hover:scale-105 duration-300 bg-slate-100  dark:bg-[#1a181aff] sm:w-[25rem] md:w-[35rem] lg:w-[20rem] xl:w-[25rem] 2xl:w-[30rem]  "
                    >
                      <div class="h-full flex justify-start items-center row-span-2">
                        <img
                          class="h-44 w-auto "
                          src={x.images.icon}
                          alt="fortnite skin"
                        />
                      </div>
                      <div class="flex flex-col justify-center items-center">
                        <p class="font-chinese  tracking-wider text-black dark:text-white text-2xl lg:text-3xl">
                          {x.name}
                        </p>
                        <p class="text-black dark:text-blue-200">
                          {x.description}
                        </p>
                      </div>
                      <div class="flex justify-center items-center">
                        <a
                          href={x.id}
                          class="relative inline-block text-lg group"
                        >
                          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#272AB0] 0 rounded-lg group-hover:text-white">
                            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#272AB0] group-hover:-rotate-180 ease"></span>
                            <span class="relative">View More</span>
                          </span>
                          <span
                            class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                            data-rounded="rounded-lg"
                          ></span>
                        </a>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Popular;
