import React, { useState } from "react";
import wordList from "./wordList.json";
import "./index.css";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return wordList[Math.floor(Math.random() * wordList.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  // console.log(guessedLetters);

  return (
    <div className="max-w-[800px] flex flex-col gap-8 my-0 mx-auto items-center">
      <div className="text-4xl ">Lose/Win</div>
      <HangmanDrawing />
      <HangmanWord />
      <div className="self-stretch">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
