import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Typical from "react-typical";
import Typewriter from "typewriter-effect";

function Homepage() {
  return (
    <div class="h-screen bg-[url('/home/aaron/odin-projects/shopping-cart/shopping-cart/src/bg.jpg')]">
      <div
        className="Hero"
        class="h-full w-full flex flex-col justify-center items-center gap-3"
      >
        <h3 class="text-9xl text-white font-blaka  tracking-[0.010em] ">
          Night Market
        </h3>
        <div>
          <p
            id="desc"
            class="text-2xl text-white font-chinese tracking-widest  "
          >
            The best place to find the latest
            <Typewriter
              options={{
                strings: ["Cosmetics", "Unreleased Items", "& More"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>

          <div class="font-chinese text-xl mt-14  flex col text-white gap-[50px] justify-center items-center w-full shadow-2xl">
            <p class="hover:animate-pulse">Unreleased Items</p>
            <p class="hover:animate-pulse">Daily Shop</p>
            <p class="hover:animate-pulse">Popular Items</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
