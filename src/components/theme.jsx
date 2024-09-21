import { useState } from "react";

export default function Theme() {
  const themes = ["theme-light", "theme-dark", "theme-colorful"];
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  // Function to toggle theme
  const toggleTheme = () => {
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(nextThemeIndex);
    document.documentElement.className = themes[nextThemeIndex]; // Update theme on the root element
  };

  return (
    <section>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-500 text-white font-bold hover:bg-blue-700 transition-all"
      >
        Change Theme
      </button>
    </section>
  );
}
