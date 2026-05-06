import { useState } from "react";

export default function ThemeToggle(){

  const [dark,setDark] = useState(true);

  const toggleTheme=()=>{

    document.documentElement.classList.toggle("dark");

    setDark(!dark);

  };

  return (

    <button
      onClick={toggleTheme}
      className="text-white"
    >

      {dark ? "☀️" : "🌙"}

    </button>

  );

}