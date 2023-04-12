import React from "react";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export default function Keyboard() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-2 ">
      {KEYS.map((key) => {
        return (
          <button
            className="w-full border-2 border-black bg-none aspect-square text-4xl uppercase p-2 font-bold cursor-pointer text-black enabled:hover:bg-violet-300 enabled:focus:bg-violet-500 enabled:active:bg-violet-700 enabled:focus:text-white enabled:active:text-white disabled:opacity-30 "
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

// .btn {
//   color: black;
// }

//grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
//grid-cols-[repeat(auto-fit, minmax(75px, 1fr))]
// grid-cols-[200px_minmax(900px,_1fr)_100px]
// }
