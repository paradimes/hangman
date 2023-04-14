import React from "react";
import "./index.css";

type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  reveal?: boolean;
};

export default function HangmanWord({
  wordToGuess,
  guessedLetters,
  reveal = false,
}: HangmanWordProps) {
  return (
    <div className="flex gap-[0.25em] text-8xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((letter, index) => (
        <span className="border-b-[0.1em] border-black" key={index}>
          <span
            className={`
            ${
              guessedLetters.includes(letter) || reveal
                ? "visibile"
                : "invisible"
            } ${
              !guessedLetters.includes(letter) && reveal
                ? "text-red-500"
                : "text-black"
            } `}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
