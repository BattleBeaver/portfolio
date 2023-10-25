"use client";
import { aboutText } from "@/utils/textAboutMe";
import React, { useEffect, useState } from "react";
import ControlBar from "./ControlBar";

const AnimatedText = () => {
  const [text, setText] = useState("");
  let curIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (curIndex < aboutText.length - 1) {
        setText((prev) => prev + aboutText[curIndex]);
      }
      curIndex++;
    }, 130);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-start py-1 whitespace-pre-wrap border p-3 relative bg-black mt-0.5 h-10/12 text-4xl text-lime-500 mx-3 w-full">
      {text}
    </div>
  );
};

export default AnimatedText;
