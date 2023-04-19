import React, { useCallback, useEffect, useState } from "react";
import wordList from "./wordList.json";
import "./index.css";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
import Header from "./Header";

const DEVELOPER_KEY = "YOUR_DEVELOPER_KEY";

function getWord() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [definition, setDefinition] = useState("");
  const [showHint, setShowHint] = useState(false);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault;
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault;
      setGuessedLetters([]);
      setWordToGuess(getWord());
      setShowHint(false);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  useEffect(() => {
    fetch(
      `https://dictionaryapi.com/api/v3/references/learners/json/${wordToGuess}?key=${DEVELOPER_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDefinition(data[0].shortdef.join(". "));
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [wordToGuess]);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="h-screen flex justify-center items-center">
        <div className="max-w-[1000px] flex flex-col items-center justify-center px-4 py-8 gap-8 my-0 mx-auto container">
          <div className="gap-[0.25em] text-4xl font-bold uppercase font-mono text-center">
            {isLoser && (
              <p className="text-red-500">
                Nice try! Press enter or refresh to try again!
              </p>
            )}
            {isWinner && (
              <p className="text-emerald-700">
                "Winner! Press enter or refresh to play again!"
              </p>
            )}
          </div>
          <div className="flex gap-60 items-center ">
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
            <div
              className=" text-md font-bold uppercase font-mono flex w-[300px] h-fit-content border-4 justify-center items-center border-slate-300 bg-slate-800 text-white p-2 rounded-lg cursor-pointer "
              onClick={() => setShowHint(!showHint)}
            >
              {isWinner || isLoser || showHint ? (
                <p className="text-center">Definition: {definition}</p>
              ) : (
                <p>Hint</p>
              )}
            </div>
          </div>
          <div className="">
            <HangmanWord
              reveal={isLoser}
              guessedLetters={guessedLetters}
              wordToGuess={wordToGuess}
            />
          </div>
          <div className="max-w-[800px] flex-auto w-full">
            <Keyboard
              disabled={isWinner || isLoser}
              activeLetters={guessedLetters.filter((letter) =>
                wordToGuess.includes(letter)
              )}
              inactiveLetters={incorrectLetters}
              addGuessedLetter={addGuessedLetter}
            />
          </div>
        </div>
      </main>{" "}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center">
            &copy; 2023 Hangman. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
