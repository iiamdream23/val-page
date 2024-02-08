"use client"
"use client";

import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [buttonStyles, setButtonStyles] = useState({
    yesButton: {
      fontSize: 16,
      padding: 16,
    },
    noButton: {
      fontSize: 16,
      padding: 16,
    },
  });

  const [displayText, setDisplayText] = useState("Will you be my Valentine?");

  const [noButtonText, setNoButtonText] = useState("No");

  const [clickCount, setClickCount] = useState(0);

  const [imageSrc, setImageSrc] = useState("/val-1.png");

  const [interactionOver, setInteractionOver] = useState(false);

  const handleNoClick = () => {
    if (clickCount < 15) {
      setButtonStyles((prevStyles) => ({
        ...prevStyles,
        noButton: {
          fontSize: Math.max(prevStyles.noButton.fontSize - 2, 15),
          padding: Math.max(prevStyles.noButton.padding - 2, 15),
        },
        yesButton: {
          fontSize: Math.min(prevStyles.yesButton.fontSize + 2, 99),
          padding: Math.min(prevStyles.yesButton.padding + 2, 99),
        },
      }));

      const noTexts = [
        "Are you sure?",
        "Baby Stop Naw 😞!",
        "Really?",
        "Think again my COKE!",
        "Baby Stop Naw 😞!",
        "Final answer?",
        "My darlin?",
        "Baby Stop Naw 😞!",
        "breakin my heart 💔",
        "This could be a mistake",
        "Have a heart",
        "Baby Stop Naw 😞!",
      ];

      const randomIndex = Math.floor(Math.random() * noTexts.length);
      setNoButtonText(noTexts[randomIndex]);
      setClickCount((prevCount) => prevCount + 1);
    }
  };

  const handleYesClick = () => {
    setButtonStyles((prevStyles) => ({
      ...prevStyles,
      yesButton: {
        fontSize: prevStyles.yesButton.fontSize + 2,
        padding: prevStyles.yesButton.padding + 2,
      },
    }));

    setDisplayText("Yay!!! 💋");

    // Change the image source when "YES" is clicked
    setImageSrc("/val-2.png");

    // Disable further interaction
    setInteractionOver(true);
  };

  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center justify-center">
      <Image
        src={imageSrc}
        alt="bre"
        className="h-[200px] w-[200px] mb-10"
        height={200}
        width={200}
      />
      <h1 className="mb-3 font-medium text-3xl">{displayText}</h1>
      <div className="space-x-2">
        <button
          className="bg-green-600 transition-all duration-500 hover:bg-green-400 hover:font-bold p-3 shadow-xl rounded-l-lg"
          style={{
            fontSize: `${buttonStyles.yesButton.fontSize}px`,
            padding: `${buttonStyles.yesButton.padding}px`,
          }}
          onClick={handleYesClick}
          disabled={interactionOver}
        >
          YES
        </button>

        <button
          className="p-3 shadow-xl rounded-r-lg border-r border-t border-b border-red-700 transition-all duration-500 hover:bg-slate-400 hover:font-bold"
          style={{
            fontSize: `${buttonStyles.noButton.fontSize}px`,
            padding: `${buttonStyles.noButton.padding}px`,
          }}
          onClick={handleNoClick}
          disabled={interactionOver}
        >
          {noButtonText}
        </button>
      </div>
    </div>
  );
};

export default Hero;


