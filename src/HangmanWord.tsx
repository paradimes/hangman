import React from "react";
import "./index.css";

export default function HangmanWord() {
  const word = "hangman";
  const guessedLetters = ["h", "a", "d"];
  return (
    <div className="flex gap-[0.25em] text-8xl font-bold uppercase font-mono">
      {word.split("").map((letter, index) => (
        <span className="border-b-[0.1em] border-black" key={index}>
          <span
            className={`${
              guessedLetters.includes(letter) ? "visibile" : "invisible"
            }`}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
