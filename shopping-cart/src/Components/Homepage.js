import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import Typical from "react-typical";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import bg from "./bg.jpg";

function Homepage() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      class="h-screen max-w-base"
    >
      <div
        className="Hero"
        class="h-full w-full flex flex-col justify-center items-center gap-3"
      >
        <h3 class="text-8xl text-white font-blaka  tracking-[0.010em] sm:text-9xl ">
          Night Market
        </h3>
        <div>
          <p
            id="desc"
            class="text-xl text-white font-chinese tracking-widest sm:text-2xl  "
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
