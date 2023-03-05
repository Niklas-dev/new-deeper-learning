import React from "react";
import { Zilla_Slab, Roboto, Oswald, Anton } from "@next/font/google";

const zilla = Zilla_Slab({
  subsets: ["latin"],
  weight: "700",
});
const roboto = Roboto({ subsets: ["latin"], weight: "700" });
const oswald = Oswald({ subsets: ["latin"], weight: "700" });
const anton = Anton({ subsets: ["latin"], weight: "400" });
export default function ScrollDown() {
  return (
    <div className="h-40">
      <div className="flex flex-row justify-center animate-bounce  ">
        <div className="flex flex-col items-center justify-center">
          <h3 className={`${oswald.className} text-center text-2xl ml-3`}>
            Scroll Down
          </h3>
          <svg
            className=""
            width={60}
            height={65}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#a)">
              <path
                d="m15.656 10.938-.031 34.374a6.23 6.23 0 0 0 2.625 5.094L37.5 64.063l19.25-13.657a6.23 6.23 0 0 0 2.625-5.093l-.031-34.376L37.5 26.063 15.656 10.938Z"
                fill="#000"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path
                  fill="#fff"
                  transform="rotate(90 37.5 37.5)"
                  d="M0 0h75v75H0z"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
