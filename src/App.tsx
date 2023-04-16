import React, { useCallback, useEffect, useState } from "react";
import wordList from "./wordList.json";
import "./index.css";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

function getWord() {
  return wordList[Math.floor(Math.random() * wordList.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
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
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <nav className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-xl font-bold">
            Hangman
          </a>
          <button className="md:hidden focus:outline-none">
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
              <path
                fill-rule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 9a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 14a1 1 0 110-2h8a1 1 0 110 2h-8z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://github.com/paradimes"
                  className="hover:text-gray-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anas-mohmand-2202b8172/"
                  className="hover:text-gray-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="flex-1 bg-gray-100">
        <div id="root" className="container mx-auto px-4 py-8">
          <div className="max-w-[800px] flex flex-col gap-8 my-0 mx-auto items-center">
            <div className="gap-[0.25em] text-4xl font-bold uppercase font-mono">
              <p className="text-red-500">
                {isLoser && "Nice try! Press enter or refresh to try again!"}
              </p>
              <p className="text-emerald-700">
                {isWinner && "Winner! Press enter or refresh to play again!"}
              </p>
            </div>
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
            <HangmanWord
              reveal={isLoser}
              guessedLetters={guessedLetters}
              wordToGuess={wordToGuess}
            />
            <div className="self-stretch">
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
        </div>
      </main>
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
