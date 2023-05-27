import Link from "next/link";

import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";



export default () => {
  
  return (
    <>
      <div className="flex flex-col justify-center mb-16 md:mb-0">
        <h1 className="uppercase font-ghost text-4xl text-white font-extrabold my-5">
          Who are we?
        </h1>
        <h2 className="text-lg text-white font-medium font-ubuntu my-3">
          We are the Pingoos. A brave colony of Ordinal Arctic birds.
        </h2>
        
        <div className="my-6">
          <Link
            target="_blank"
            href="https://magiceden.io/ordinals/marketplace/pingoos"
          >
            <div class="inline-block px-4 font-ubuntu h-16 bg-blue-500 rounded-lg cursor-pointer select-none active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:2px_10px_1px_0_#1b6ff8,0_15px_0_0_#1b70f841] border-b-[1px] border-blue-400">
              <span class="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
                Browse our collectibles
              </span>
            </div>
          </Link>
          <div
  style={{
    width: '20px',
    height: '20px',
   
  }}
> </div>

        

        </div>
        {/* <div className="btn-browse uppercase text-white font-bold font-ubuntu rounded-sm hover:bg-pingo-alpha-500  bg-pingo-alpha-600 px-5 py-4 transition-all duration-300">
              Browse our collectibles
            </div> */}
      </div>
      
    </>
  );
};
