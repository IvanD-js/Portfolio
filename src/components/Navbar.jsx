import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">

      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* <h1 className="text-xl font-bold text-white">
          IvanDev
        </h1> */}

        <div className="flex items-center w-35 h-6">
            <img src="../public/logoIvan.png" alt="logo de ivandev" />
        </div>

       

        <ul className="flex gap-8 text-slate-300 hidden md:flex gap-8 text-slate-300">

          <li><a href="#about">About</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

        <ThemeToggle />

      </nav>

    </header>
  )
}