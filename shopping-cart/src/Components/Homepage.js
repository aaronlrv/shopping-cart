import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Typical from "react-typical";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div class="h-screen bg-[url('/home/aaron/odin-projects/shopping-cart/shopping-cart/src/bg.jpg')] max-w-sm">
      <div
        className="Hero"
        class="h-full w-full flex flex-col justify-center items-center gap-3"
      >
        <h3 class="text-8xl text-white font-blaka  tracking-[0.010em] ">
          Night Market
        </h3>
        <div>
          <p
            id="desc"
            class="text-xl text-white font-chinese tracking-widest  "
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
            <ul class="flex col gap-[50px]">
              <Link to="/unreleased">
                <li class="hover:animate-pulse">Unreleased Items</li>
              </Link>
              <Link to="/shop">
                <li class="hover:animate-pulse">Daily Shop</li>
              </Link>
              <Link to="/popular">
                <li class="hover:animate-pulse">Popular Items</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
