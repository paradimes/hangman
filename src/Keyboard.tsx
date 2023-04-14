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

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

const defaultStyles =
  "w-full border-2 border-black bg-none aspect-square text-4xl uppercase p-2 font-bold cursor-pointer text-black enabled:hover:bg-violet-300 enabled:focus:bg-violet-500 enabled:focus:text-white";

const activeStyles = "bg-violet-700 text-white ";

const inactiveStyles = "opacity-30";

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(75px,1fr))] gap-2 ">
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${defaultStyles} ${isInactive && inactiveStyles} ${
              isActive && activeStyles
            } `}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
