import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cards({ type, rarity, search, items, theme }) {
  console.log("Theme:", theme);
  console.log("Rarity:", rarity);
  console.log("Type:", type);
  console.log("Search:", search);
  console.log(items)

  // Filter items based on search input, rarity, and type
  const filteredItems = items.filter((item) => {
    const matchesSearch =
      !search || item.name.toLowerCase().includes(search.toLowerCase());
    const matchesRarity =
      !rarity || rarity === "not selected" || item.rarity?.toLowerCase() === rarity.toLowerCase();
    const matchesType =
      !type || type === "not selected" || item.type?.toLowerCase() === type.toLowerCase();

    return matchesSearch && matchesRarity && matchesType;
  });

  return (
    <>
      {filteredItems.map((x) => (
        <Link to={`/shop/${x.itemId}`} key={x.itemId}>
          <div
            className={`card h-72 gap-6 m-5 grid grid-rows-[100,100] grid-cols-2 shadow-xl transition ease-in-out delay-100 hover:scale-105 duration-300 ${
              theme === "light" ? "bg-[#1f2128]" : "bg-slate-100"
            }`}
          >
            <div className="h-full flex justify-start items-center row-span-2">
              <img className="h-48 w-auto" src={x.image} alt={x.name} />
            </div>
            <div className="flex flex-col justify-center items-center">
              <p
                className={`font-chinese text-3xl tracking-wider ${
                  theme === "light" ? "text-white" : "text-black"
                }`}
              >
                {x.name}
              </p>
              <p
                className={`${
                  theme === "light" ? "text-blue-200" : "text-gray-700"
                }`}
              >
                {x.description}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <a
                href={x.itemId}
                className="relative inline-block text-lg group"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#272AB0] rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#272AB0] group-hover:-rotate-180 ease"></span>
                  <span className="relative">View More</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Cards;




// {
