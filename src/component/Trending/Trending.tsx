import { useState } from "react";

export default function Trending() {
  return (
    <div className="flex gap-10 bg-[#19202D] p-2 items-center">
      <div className="text-white font-semibold sm:ml-32 ml-4 min-w-[120px] text-sm sm:text-lg">
        Now Trending:
      </div>
      <a
        className={`text-gray-400 hover:text-gray-200 transition text-sm sm:text-lg `}
        href="https://www.facebook.com/allaboutpvthighschool"
        target="_blank"
        rel="noreferrer"
      >
        Let's make Phan Van Tri confession great again!
      </a>
    </div>
  );
}
