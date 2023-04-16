import React from "react";

const HEAD = (
  <div className="absolute top-[50px] right-[-20px] rounded-full w-[50px] h-[50px] border-[10px] border-sky-800 " />
);

const BODY = (
  <div className="absolute top-[100px] right-[0] w-[10px] h-[100px] bg-sky-800" />
);

const RIGHT_ARM = (
  <div className="absolute rotate-[-30deg] top-[150px] right-[-100px] w-[100px] h-[10px] bg-sky-800 origin-bottom-left" />
);

const LEFT_ARM = (
  <div className="absolute rotate-[30deg] top-[150px] right-[10px] w-[100px] h-[10px] bg-sky-800 origin-bottom-right" />
);

const RIGHT_LEG = (
  <div className="absolute rotate-[60deg] top-[190px] right-[-90px] w-[100px] h-[10px] bg-sky-800 origin-bottom-left" />
);

const LEFT_LEG = (
  <div className="absolute rotate-[-60deg] top-[190px] right-[0px] w-[100px] h-[10px] bg-sky-800 origin-bottom-right" />
);

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div className="relative">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="w-[10px] h-[50px] bg-black absolute top-0 right-0" />
      <div className="w-[200px] h-[10px] bg-black ml-[120px]" />
      <div className="w-[10px] h-[400px] bg-black ml-[120px]" />
      <div className="w-[250px] h-[10px] bg-black" />
    </div>
  );
}
