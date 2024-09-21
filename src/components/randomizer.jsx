import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Array of Google Fonts
const fonts = [
  "'Major Mono Display', monospace",
  "'Kaushan Script', cursive",
  "'Lobster', cursive",
  "'Ranchers', cursive",
  "'Bitter', serif",
];

// Helper function to get a random font from the array
const getRandomFont = () => fonts[Math.floor(Math.random() * fonts.length)];

export default function Randomizer({ text }) {
  const word = text.split(""); // Split the text into individual letters
  const [fontFamilies, setFontFamilies] = useState(
    word.map(() => getRandomFont()) // Initialize random fonts for each letter
  );

  useEffect(() => {
    // Change the font of each letter every second
    const interval = setInterval(() => {
      setFontFamilies(word.map(() => getRandomFont())); // Update each letter's font randomly
    }, 500); // Change font every 500 milliseconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [word]);

  return (
    <div>
      {word.map((letter, index) => (
        <motion.span
          key={index}
          style={{
            fontFamily: fontFamilies[index], // Apply the random font
            color: `hsl(${Math.random() * 360}, 100%, 50%)`, // Random color for each letter
          }}
          className="" // Style and spacing for each letter
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 + index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
}
