import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cards({ type, rarity, search, items, theme }) {
  console.log(theme);

  if (theme === "dark") {
    /// light mode styling
    if (search !== undefined) {
      return items.map((x) => {
        if (x.item.name === search) {
          return (
            <>
              <Link to={`/shop/${x.itemId}`}>
                <div
                  className="card"
                  class="h-72 gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-xl transition ease-in-out delay-100  hover:scale-105 duration-300 bg-slate-100  "
                >
                  <div class="h-full flex justify-start items-center row-span-2">
                    <img
                      class="h-48 w-auto "
                      src={x.item.images.icon}
                      alt="fortnite skin"
                    />
                  </div>
                  <div class="flex flex-col justify-center items-center">
                    <p class="font-chinese text-3xl tracking-wider text-black">
                      {x.item.name}
                    </p>
                    <p class="text-">{x.item.description}</p>
                  </div>
                  <div class="flex justify-center items-center">
                    <a
                      href={x.itemId}
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
        }
      });
    } else if (rarity !== undefined && type !== undefined) {
      return items.map((x) => {
        if (x.item.rarity === rarity && x.item.type === type) {
          return (
            <>
              <Link to={`/shop/${x.itemId}`}>
                <div
                  className="card"
                  class="h-72 gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-xl transition ease-in-out delay-100  hover:scale-105 duration-300 bg-slate-100  "
                >
                  <div class="h-full flex justify-start items-center row-span-2">
                    <img
                      class="h-48 w-auto "
                      src={x.item.images.icon}
                      alt="fortnite skin"
                    />
                  </div>
                  <div class="flex flex-col justify-center items-center">
                    <p class="font-chinese text-3xl tracking-wider text-black">
                      {x.item.name}
                    </p>
                    <p class="text-">{x.item.description}</p>
                  </div>
                  <div class="flex justify-center items-center">
                    <a
                      href={x.itemId}
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
        }
      });
    } else if (rarity !== undefined) {
      return items.map((x) => {
        if (x.item.rarity === rarity) {
          return (
            <>
              <Link to={`/shop/${x.itemId}`}>
                <div
                  className="card"
                  class="h-72 gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-xl transition ease-in-out delay-100  hover:scale-105 duration-300 bg-slate-100  "
                >
                  <div class="h-full flex justify-start items-center row-span-2">
                    <img
                      class="h-48 w-auto "
                      src={x.item.images.icon}
                      alt="fortnite skin"
                    />
                  </div>
                  <div class="flex flex-col justify-center items-center">
                    <p class="font-chinese text-3xl tracking-wider text-black">
                      {x.item.name}
                    </p>
                    <p class="text-">{x.item.description}</p>
                  </div>
                  <div class="flex justify-center items-center">
                    <a
                      href={x.itemId}
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
        }
      });
    } else if (type !== undefined) {
      return items.map((x) => {
        if (x.item.type === type) {
          return (
            <>
              <Link to={`/shop/${x.itemId}`}>
                <div
                  className="card"
                  class="h-72 gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-xl transition ease-in-out delay-100  hover:scale-105 duration-300 bg-slate-100  "
                >
                  <div class="h-full flex justify-start items-center row-span-2">
                    <img
                      class="h-48 w-auto "
                      src={x.item.images.icon}
                      alt="fortnite skin"
                    />
                  </div>
                  <div class="flex flex-col justify-center items-center">
                    <p class="font-chinese text-3xl tracking-wider text-black">
                      {x.item.name}
                    </p>
                    <p class="text-">{x.item.description}</p>
                  </div>
                  <div class="flex justify-center items-center">
                    <a
                      href={x.itemId}
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
        }
      });
    } else {
      return items.map((x) => {
        return (
          <>
            <Link to={`/shop/${x.itemId}`}>
              <div
                className="card"
                class="h-72 gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-xl transition ease-in-out delay-100  hover:scale-105 duration-300 bg-slate-100  "
              >
                <div class="h-full flex justify-start items-center row-span-2">
                  <img
                    class="h-48 w-auto "
                    src={x.item.images.icon}
                    alt="fortnite skin"
                  />
                </div>
                <div class="flex flex-col justify-center items-center">
                  <p class="font-chinese text-3xl tracking-wider text-black">
                    {x.item.name}
                  </p>
                  <p class="text-">{x.item.description}</p>
                </div>
                <div class="flex justify-center items-center">
                  <a
                    href={x.itemId}
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
      });
    }
  } else {
    /// dark mode styling
    if (search !== undefined) {
      return items.map((x) => {
        if (x.item.name === search) {
          return (
            <>
              <Link to={`/shop/${x.itemId}`}>
                <div
                  className="card"
                  class="h-72 gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-xl transition ease-in-out delay-100  hover:scale-105 duration-300 bg-[#1f2128] dark:bg-purple-500   "
                >
                  <div class="h-full flex justify-start items-center row-span-2">
                    <img
                      class="h-48 w-auto "
                      src={x.item.images.icon}
                      alt="fortnite skin"
                    />
                  </div>
                  <div class="flex flex-col justify-center items-center">
                    <p class="font-chinese text-3xl tracking-wider text-white">
                      {x.item.name}
                    </p>
                    <p class="text-blue-200">{x.item.description}</p>
                  </div>
                  <div class="flex justify-center items-center">
                    <a
                      href={x.itemId}
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
        }
      });
    } else if (rarity !== undefined && type !== undefined) {
      return items.map((x) => {
        if (x.item.rarity === rarity && x.item.type === type) {
          return (
            <>
              <Link to={`/shop/${x.itemId}`}>
                <div
                  className="card"
                  class="h-72 gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-xl transition ease-in-out delay-100  hover:scale-105 duration-300 bg-[#1f2128]  "
                >
                  <div class="h-full flex justify-start items-center row-span-2">
                    <img
                      class="h-48 w-auto "
                      src={x.item.images.icon}
                      alt="fortnite skin"
                    />
                  </div>
                  <div class="flex flex-col justify-center items-center">
                    <p class="font-chinese text-3xl tracking-wider text-white">
                      {x.item.name}
                    </p>
                    <p class="text-blue-200">{x.item.description}</p>
                  </div>
                  <div class="flex justify-center items-center">
                    <a
                      href={x.itemId}
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
        }
      });
    } else if (rarity !== undefined) {
      return items.map((x) => {
        if (x.item.rarity === rarity) {
          return (
            <>
              <Link to={`/shop/${x.itemId}`}>
                <div
                  className="card"
                  class="h-72 gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-xl transition ease-in-out delay-100  hover:scale-105 duration-300 bg-[#1f2128]  "
                >
                  <div class="h-full flex justify-start items-center row-span-2">
                    <img
                      class="h-48 w-auto "
                      src={x.item.images.icon}
                      alt="fortnite skin"
                    />
                  </div>
                  <div class="flex flex-col justify-center items-center">
                    <p class="font-chinese text-3xl tracking-wider text-white">
                      {x.item.name}
                    </p>
                    <p class="text-blue-200">{x.item.description}</p>
                  </div>
                  <div class="flex justify-center items-center">
                    <a
                      href={x.itemId}
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
        }
      });
    } else if (type !== undefined) {
      return items.map((x) => {
        if (x.item.type === type) {
          return (
            <>
              <Link to={`/shop/${x.itemId}`}>
                <div
                  className="card"
                  class="h-72 gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-xl transition ease-in-out delay-100  hover:scale-105 duration-300 bg-[#1f2128]  "
                >
                  <div class="h-full flex justify-start items-center row-span-2">
                    <img
                      class="h-48 w-auto "
                      src={x.item.images.icon}
                      alt="fortnite skin"
                    />
                  </div>
                  <div class="flex flex-col justify-center items-center">
                    <p class="font-chinese text-3xl tracking-wider text-white">
                      {x.item.name}
                    </p>
                    <p class="text-blue-200">{x.item.description}</p>
                  </div>
                  <div class="flex justify-center items-center">
                    <a
                      href={x.itemId}
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
        }
      });
    } else {
      return items.map((x) => {
        return (
          <>
            <Link to={`/shop/${x.itemId}`}>
              <div
                className="card"
                class="h-72 gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-xl transition ease-in-out delay-100  hover:scale-105 duration-300 bg-[#1f2128]  "
              >
                <div class="h-full flex justify-start items-center row-span-2">
                  <img
                    class="h-48 w-auto "
                    src={x.item.images.icon}
                    alt="fortnite skin"
                  />
                </div>
                <div class="flex flex-col justify-center items-center">
                  <p class="font-chinese text-3xl tracking-wider text-white">
                    {x.item.name}
                  </p>
                  <p class="text-blue-200">{x.item.description}</p>
                </div>
                <div class="flex justify-center items-center">
                  <a
                    href={x.itemId}
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
      });
    }
  }
}

export default Cards;

// {
