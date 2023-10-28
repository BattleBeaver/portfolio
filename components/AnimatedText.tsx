"use client";
import { aboutText } from "@/utils/textAboutMe";
import React, { useEffect, useState } from "react";

const AnimatedText = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    let curIndex = 0;
    const interval = setInterval(() => {
      if (curIndex < aboutText.length - 1) {
        setText((prev) => prev + aboutText[curIndex]);
      }
      curIndex++;
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="text-start whitespace-pre-wrap bg-black h-full text-2xl lg:text-4xl text-lime-500 w-full p-1">
      {text}
    </div>
  );
};

export default AnimatedText;
